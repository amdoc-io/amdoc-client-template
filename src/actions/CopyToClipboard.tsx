import { useState } from "react";
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";

export const CopyToClipboard = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, id = "copy", ...restProps } = props;

  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  if (copy) {
    return (
      <div {...restProps} id={id}>
        <TbCopyCheckFilled className="text-lg" />
      </div>
    );
  }

  return (
    <div {...restProps} id={id}>
      <TbCopy onClick={handleCopy} className="cursor-pointer text-lg" />
    </div>
  );
};
