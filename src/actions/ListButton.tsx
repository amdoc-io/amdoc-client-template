import { ReactNode } from "react";
import { RxChevronRight } from "react-icons/rx";

export const ListButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    icon?: ReactNode;
  }
) => {
  const { icon, className, children, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`w-full flex justify-between items-center gap-2 py-2 px-8 hover:bg-gray-100/70 transition-all duration-300 cursor-pointer group`}
    >
      <div className="flex items-center gap-4">
        <div className="text-primary">{icon}</div>
        {children}
      </div>

      <div className="text-inherit opacity-0 transition-all duration-300 group-hover:opacity-100">
        <RxChevronRight />
      </div>
    </button>
  );
};
