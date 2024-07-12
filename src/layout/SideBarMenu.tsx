import { useLocation } from "react-router-dom";
import { menu } from "../igendoc.config";
import { Divider } from "./Divider";

export const SideBarMenu = () => {
  const location = useLocation();

  const isCurrentPage = (item: any) => {
    return (
      location.pathname === item.href ||
      (location.pathname === "/" && item.label === menu[0].label)
    );
  };

  const renderItems = (menu: any[], depth: number) => {
    return (
      <ul className="font-medium">
        {menu.map((item, i) =>
          (item.children || []).length > 0 ? (
            <li
              key={`${depth}-${i}`}
              className={`${depth > 0 ? "ml-4 mt-2" : ""}`}
            >
              <Divider />

              <p className="font-semibold mb-2 ml-4 lg:ml-8">{item.label}</p>
              <li>{renderItems(item.children, depth + 1)}</li>
            </li>
          ) : (
            <li key={`${depth}-${i}`} className="text-gray-500">
              {depth === 0 && i === 0 && <Divider />}
              <a
                href={item.href}
                className={`flex items-center break-all gap-3 px-4 lg:px-8 py-2 w-[250px] transition-all duration-300 ${
                  isCurrentPage(item)
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100/70"
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>
    );
  };

  return <div className="flex flex-col gap-4 pb-4">{renderItems(menu, 0)}</div>;
};
