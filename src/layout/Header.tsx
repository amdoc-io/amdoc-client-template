import { useEffect, useState } from "react";
import { SearchBox } from "../actions/SearchBox";
import { SearchModal } from "../actions/SearchModal";
import { brandName } from "../igendoc.config";

export const Header = () => {
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setSearchModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="fixed h-16 top-0 left-0 right-0 border-b border-b-gray-200/70 py-4 z-30 bg-white flex items-center">
        <div className="grid grid-cols-3 items-center px-8 w-full">
          <div>
            <a href="/">{brandName === "$brandName" ? "iGendoc" : brandName}</a>
          </div>

          <SearchBox
            className="hidden lg:block"
            onClick={() => setSearchModalOpen(true)}
          />
        </div>
      </header>
      <SearchModal open={searchModalOpen} setOpen={setSearchModalOpen} />
    </>
  );
};
