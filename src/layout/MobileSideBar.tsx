import { useMemo, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { SideBarMenu } from "./SideBarMenu";
import { Cross as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";
import { menu } from "../igendoc.config";
import { extractHeadingTitle } from "../utils/StringUtils";
import { SearchBox } from "../actions/SearchBox";
import { useDispatch } from "react-redux";
import { setSearchModalOpen } from "../features/search/searchSlice";

export const MobileSideBar = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isDocPage = useMemo(
    () =>
      menu.findIndex(
        (item) => item.label === extractHeadingTitle(location.pathname)
      ) !== -1,
    [location]
  );

  return (
    <Fragment>
      <div className="block lg:hidden absolute top-4 right-4 z-20">
        <div className="cursor-pointer z-20">
          <Hamburger
            size={24}
            toggled={menuOpen}
            toggle={setMenuOpen}
            direction="right"
            color={isDocPage && !menuOpen ? "white" : "black"}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="flex lg:hidden absolute top-0 bg-white z-10 left-0 right-0 py-4 border-b border-b-gray-200/70 flex-col gap-6">
          <div className="h-10 z-10 bg-transparent" />
          <div className="px-8">
            <SearchBox onClick={() => dispatch(setSearchModalOpen(true))} />
          </div>
          <SideBarMenu />
        </div>
      )}
    </Fragment>
  );
};
