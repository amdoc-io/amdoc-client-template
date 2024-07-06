export const Divider = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={`flex w-full bg-gray-200 h-[1px] my-8 ${className}`}
    />
  );
};
