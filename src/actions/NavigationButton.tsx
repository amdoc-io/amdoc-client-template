import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

export const NavigationButton = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {
    position?: "left" | "right";
  }
) => {
  const { children, position, className, ...restProps } = props;
  return (
    <a
      {...restProps}
      className={`flex flex-col gap-2 pt-6 pb-20 font-medium bg-gray-container transition-all duration-300 px-8 ${
        children ? "cursor-pointer hover:bg-gray-hover" : ""
      } ${
        position === "left"
          ? "border-r-[0.5px] border-r-gray-200/70 items-start"
          : "border-l-[0.5px] border-l-gray-200/70 items-end"
      } ${className}`}
    >
      {children && (
        <>
          {children}
          {position === "left" ? <RxArrowLeft /> : <RxArrowRight />}
        </>
      )}
    </a>
  );
};
