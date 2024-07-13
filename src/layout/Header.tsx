import { SearchBox } from "../actions/SearchBox";

export const Header = () => {
  return (
    <header className="fixed h-16 top-0 left-0 right-0 border-b border-b-gray-200/70 py-4 z-30 bg-white flex items-center">
      <div className="grid grid-cols-3 items-center px-8 w-full">
        <div>
          <a href="/">iGendoc</a>
        </div>

        <SearchBox className="hidden lg:block" />
      </div>
    </header>
  );
};
