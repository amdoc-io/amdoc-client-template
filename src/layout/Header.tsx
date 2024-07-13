import { useEffect } from "react";
import { SearchBox } from "../actions/SearchBox";
import { useDispatch } from "react-redux";
import { setSearchModalOpen } from "../features/search/searchSlice";
import { SearchModal } from "../actions/SearchModal";

export const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        dispatch(setSearchModalOpen(true));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      <header className="fixed h-16 top-0 left-0 right-0 border-b border-b-gray-200/70 py-4 z-30 bg-white flex items-center">
        <div className="grid grid-cols-3 items-center px-8 w-full">
          <div>
            <a href="/">iGendoc</a>
          </div>

          <SearchBox
            className="hidden lg:block"
            onClick={() => dispatch(setSearchModalOpen(true))}
          />
        </div>
      </header>
      <SearchModal />
    </>
  );
};
