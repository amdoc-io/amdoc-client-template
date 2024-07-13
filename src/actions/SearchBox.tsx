import { FiCommand } from "react-icons/fi";
import { RxMagnifyingGlass } from "react-icons/rx";

export const SearchBox = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { className, children, ...restProps } = props;
  return (
    <div {...restProps} className={`${className}`}>
      <div
        className={`px-2 py-1 border rounded-md flex justify-between text-sm items-center cursor-pointer w-full`}
      >
        <div className="text-sm flex items-center gap-2">
          <RxMagnifyingGlass />

          <p className="text-gray-400">Search the docs or ask a question</p>
        </div>

        <div className="flex gap-1 border rounded-md bg-gray-100 items-center p-1 text-xs">
          <FiCommand />K
        </div>
      </div>
    </div>
  );
};
