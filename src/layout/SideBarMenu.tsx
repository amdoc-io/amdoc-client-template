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
      <ul>
        {menu.map((item, i) =>
          (item.children || []).length > 0 ? (
            <li
              key={`${depth}-${i}`}
              className={`${depth > 0 ? "ml-4 mt-2" : ""}`}
            >
              {i - 1 >= 0 && (menu[i - 1].children || []).length === 0 && (
                <Divider />
              )}

              <p className="font-semibold mb-2 ml-4">{item.label}</p>
              <li>{renderItems(item.children, depth + 1)}</li>
              {i >= 0 && <Divider />}
            </li>
          ) : (
            <li key={`${depth}-${i}`}>
              <a
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-4 py-2 min-w-[250px] transition-all duration-300 ${
                  isCurrentPage(item)
                    ? "bg-primary text-white"
                    : "hover:bg-gray-300/30"
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
