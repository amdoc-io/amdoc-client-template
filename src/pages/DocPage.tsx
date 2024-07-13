import { useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkToc from "remark-toc";
import { CopyToClipboard } from "../actions/CopyToClipboard";
import { getGithubRepoContent } from "../fetch/GithubFetch";
import { owner, repo } from "../igendoc.config";
import { DocContainer } from "../layout/DocContainer";
import { GithubInstallationToken } from "../model/GithubModel";

export const DocPage = () => {
  const location = useLocation();
  const githubInstallationToken: GithubInstallationToken = useSelector(
    (state: any) => state.auth.githubInstallationToken
  );

  const [content, setContent] = useState<string>("");

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const applyStyles = () => {
      const element = document.getElementById("toc-container");

      if (element) {
        element.style.position = isSticky ? "sticky" : "static";
        element.style.top = "100px";
        element.style.transition = "transform 0.3s ease-in-out";
      }
    };

    applyStyles();

    const handleScroll = () => {
      const shouldStick = window.scrollY > 0;
      setIsSticky(shouldStick);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const fetchContent = useCallback(async () => {
    if (githubInstallationToken && githubInstallationToken.token) {
      const res = await getGithubRepoContent(
        githubInstallationToken.token,
        owner,
        repo,
        `src${location.pathname}.md`
      );
      if (res) {
        setContent(atob(res.content));
      }
    }
  }, [githubInstallationToken, location]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  useEffect(() => {
    const preElements = document.querySelectorAll("pre");
    preElements.forEach((element) => {
      const codeElement = element.querySelector("code");
      const content = codeElement ? codeElement.textContent : "";

      element.className = "relative pr-8";

      const copyContainer = document.createElement("div");
      copyContainer.className = "absolute top-[18px] right-4";
      element.appendChild(copyContainer);

      const root = createRoot(copyContainer);
      root.render(<CopyToClipboard>{content}</CopyToClipboard>);

      const childDiv = element.querySelector(".copy");

      if (childDiv) {
        element.appendChild(copyContainer);
      }
    });
  }, [content]);

  useEffect(() => {
    const moveElement = () => {
      const tableOfContents = document.getElementById("table-of-contents");
      const onPage = document.getElementById("on-this-page");

      if (tableOfContents && onPage) {
        const firstUl = tableOfContents.nextElementSibling;

        if (firstUl && firstUl.tagName.toLowerCase() === "ul") {
          const container = document.createElement("div");
          tableOfContents.className = "hidden";
          firstUl.className = "text-sm toc";
          container.appendChild(tableOfContents);
          container.appendChild(firstUl);

          onPage.insertAdjacentElement("afterend", container);
        }
      }
    };

    if (content) {
      moveElement();
    }
  }, [content]);

  return (
    <DocContainer>
      <div className="flex gap-8">
        <div className="content flex flex-col w-full lg:w-[80%] text-[16px]">
          <ReactMarkdown
            remarkPlugins={[
              [remarkToc, { maxDepth: 2 }],
              remarkGfm,
              [remarkHeadingId, { defaults: true, uniqueDefaults: true }],
            ]}
          >
            {`${content && "### Table of Contents \n \n"}${content}`}
          </ReactMarkdown>
        </div>

        <div className="hidden lg:flex flex-col w-[20%]">
          <div id="toc-container">
            <div id="on-this-page" className="font-semibold">
              On this page
            </div>
          </div>
        </div>
      </div>
    </DocContainer>
  );
};
