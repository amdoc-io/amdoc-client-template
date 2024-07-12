export const PageContainer = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={`px-4 lg:px-12 max-w-screen-2xl ml-auto mr-auto w-full py-12 ${className}`}
    ></div>
  );
};
