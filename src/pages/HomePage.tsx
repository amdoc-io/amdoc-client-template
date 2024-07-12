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
import { GithubInstallationToken } from "../model/GithubModel";
import { owner, repo } from "../igendoc.config";

export const HomePage = () => {
  const location = useLocation();
  const githubInstallationToken: GithubInstallationToken = useSelector(
    (state: any) => state.auth.githubInstallationToken
  );

  const [content, setContent] = useState<string>("");

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

      element.classList.add("relative");

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

  return (
    <div className="flex gap-8">
      <div className="content flex flex-col w-full lg:w-[80%]">
        <ReactMarkdown
          remarkPlugins={[
            remarkToc,
            remarkGfm,
            [remarkHeadingId, { defaults: true, uniqueDefaults: true }],
          ]}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div className="hidden lg:flex flex-col w-[20%]">
        <p>On this page</p>
      </div>
    </div>
  );
};
