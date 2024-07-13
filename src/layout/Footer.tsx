import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { NavigationButton } from "../actions/NavigationButton";
import { menu } from "../igendoc.config";
import { flattenMenu } from "../utils/TreeUtils";

export const Footer = () => {
  const location = useLocation();
  const flatMenu = useMemo(() => flattenMenu(menu), []);
  console.log(flatMenu);
  const { prev, next } = useMemo(() => {
    const currentIndex = flatMenu.findIndex(
      (item) => item.href === location.pathname
    );
    return {
      prev:
        currentIndex - 1 >= 0
          ? flatMenu[currentIndex - 1]
          : currentIndex - 1 === -1
          ? { label: "Home", href: "/" }
          : undefined,
      next:
        currentIndex + 1 < flatMenu.length
          ? flatMenu[currentIndex + 1]
          : undefined,
    };
  }, [location, flatMenu]);

  return (
    <div className="grid grid-cols-2 text-sm">
      <NavigationButton href={prev?.href} position="left">
        {prev?.label}
      </NavigationButton>

      <NavigationButton href={next?.href} position="right">
        {next?.label}
      </NavigationButton>
    </div>
  );
};
