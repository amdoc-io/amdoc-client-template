import { GithubTree } from "../model/GithubModel";
import { snakeToTitleCase } from "./StringUtils";

export const mapToSideMenu = (tree: GithubTree[]) => {
  return tree.map((item) => {
    const parts = item.path.split("/").splice(1);
    const href = "/" + parts.join("/").replaceAll(".md", "");
    return {
      label: snakeToTitleCase(parts[parts.length - 1].replaceAll(".md", "")),
      href: href,
    };
  });
};
