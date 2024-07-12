import { SideBarMenu } from "./SideBarMenu";

export const SideBar = () => {
  return (
    <div className="flex-col hidden lg:flex fixed top-16 z-10 bg-white h-full">
      <div className="h-full py-4 flex justify-end relative border-r border-r-gray-200/70">
        <nav className="text-base lg:text-sm">
          <div className="flex flex-col text-xs lg:text-[10px] px-4 lg:px-8 gap-21 uppercase font-medium pb-4">
            <p>Guidelines</p>
            <p className="text-gray-500">Updated: JULY 11, 2024</p>
          </div>
          <SideBarMenu />
        </nav>
      </div>
    </div>
  );
};
