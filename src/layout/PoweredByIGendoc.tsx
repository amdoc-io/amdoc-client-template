export const PoweredByIGendoc = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  return (
    <a
      href="https://igendoc.com"
      target="_blank"
      rel="noreferrer"
      className={`absolute bg-white cursor-pointer bottom-0 py-4 w-full border-t border-t-gray-200/70 px-8 text-xs flex justify-center items-center ${props.className}`}
    >
      <p>
        Powered by <span className="font-semibold">iGendoc</span>
      </p>
    </a>
  );
};
