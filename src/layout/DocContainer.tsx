import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { brandColor, menu } from "../igendoc.config";
import { extractHeadingTitle } from "../utils/StringUtils";

export const DocContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, className, ...restProps } = props;
  const location = useLocation();

  const index = useMemo(
    () =>
      menu.findIndex(
        (item) => item.label === extractHeadingTitle(location.pathname)
      ) + 1,
    [location]
  );

  return (
    <div {...restProps} className={`flex flex-col w-full ${className}`}>
      <div
        className="bg-primary text-white h-80"
        style={{ backgroundColor: brandColor }}
      >
        <div className="px-8 lg:px-12 max-w-screen-2xl ml-auto mr-auto w-full flex items-end h-full py-8">
          <div className="text-[36px] lg:text-[42px] font-semibold grid grid-cols-1 lg:grid-cols-2 w-full">
            <span className="text-white/50">{`${
              index < 10 ? "0" : ""
            }${index}`}</span>
            <span>{extractHeadingTitle(location.pathname)}</span>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-12 max-w-screen-2xl ml-auto mr-auto w-full py-12">
        {props.children}
      </div>
    </div>
  );
};
