import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { NavigationButton } from "../actions/NavigationButton";
import { logo, menu } from "../igendoc.config";
import { flattenMenu } from "../utils/TreeUtils";
import { Divider } from "./Divider";
import { ReactSVG } from "react-svg";

export const Footer = () => {
  const location = useLocation();
  const flatMenu = useMemo(() => flattenMenu(menu), []);

  const { prev, next } = useMemo(() => {
    const currentIndex = flatMenu.findIndex(
      (item) => item.href === location.pathname
    );
    return {
      prev:
        currentIndex - 1 >= 0
          ? flatMenu[currentIndex - 1]
          : currentIndex - 1 === -1
          ? { label: "Home", href: "/" }
          : undefined,
      next:
        currentIndex + 1 < flatMenu.length
          ? flatMenu[currentIndex + 1]
          : undefined,
    };
  }, [location, flatMenu]);

  const handleBeforeInjection = (svg: SVGElement) => {
    svg.setAttribute("width", "32px");
    svg.setAttribute("height", "32px");
    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => {
      path.setAttribute("fill", "#ffffff");
    });
  };

  return (
    <div className="flex flex-col w-full bg-gray-container text-sm footer">
      <div className="grid grid-cols-2 px-8 lg:px-12 max-w-screen-2xl ml-auto mr-auto w-full">
        <NavigationButton href={prev?.href} position="left">
          {prev?.label}
        </NavigationButton>

        <NavigationButton href={next?.href} position="right">
          {next?.label}
        </NavigationButton>
      </div>

      <div className="bg-black text-white">
        <div className="max-w-screen-2xl ml-auto mr-auto w-full px-8 lg:px-12 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <p>Guidelines</p>

            <p className="text-gray-footer">Version 1.0</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p>Get in Touch</p>
              <p className="text-gray-footer">info@igendoc.com</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/company/igendoc"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <Divider className="!bg-gray-footer/40 max-w-screen-2xl ml-auto mr-auto w-full " />

        <div className="max-w-screen-2xl ml-auto mr-auto w-full px-8 lg:px-12 py-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-white col-span-1 sm:col-span-2">
            <ReactSVG src={logo} beforeInjection={handleBeforeInjection} />
          </div>

          <div className="text-gray-footer">@2024 iGendoc</div>

          <div>
            <a href={window.location.href}>Back to top</a>
          </div>
        </div>
      </div>
    </div>
  );
};
