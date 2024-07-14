export const Pill = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={`flex gap-1 border rounded-md bg-gray-100/50 items-center p-1 text-xs ${className}`}
    />
  );
};
