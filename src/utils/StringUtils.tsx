import { menu } from "../igendoc.config";

export const snakeToTitleCase = (s: string) => {
  return s
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const extractHeadingTitle = (pathName: string) => {
  const parts = pathName.split("/");
  if (parts.length < 2) {
    return "";
  }
  return menu.find(
    (item) =>
      item.label.toLowerCase() === snakeToTitleCase(parts[1]).toLowerCase()
  )?.label;
};
