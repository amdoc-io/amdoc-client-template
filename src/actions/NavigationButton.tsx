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
      className={`flex flex-col gap-2 pt-6 pb-20 font-medium bg-gray-container transition-all duration-300 px-8 items-start ${
        children ? "cursor-pointer hover:bg-gray-hover hover:!text-black" : ""
      } ${
        position === "left"
          ? "border-t-[0.5px] border-t-gray-200/70 lg:border-r-[0.5px] lg:border-r-gray-200/70"
          : "border-b-[0.5px] border-b-gray-200/70 lg:border-l-[0.5px] lg:border-l-gray-200/70"
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
