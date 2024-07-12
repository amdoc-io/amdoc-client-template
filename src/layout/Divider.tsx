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
      className={`flex w-full bg-gray-200/70 h-[1px] my-4 ${className}`}
    />
  );
};
