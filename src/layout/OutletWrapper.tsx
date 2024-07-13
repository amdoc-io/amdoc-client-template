import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthToken,
  setGithubInstallationToken,
} from "../features/auth/authSlice";
import { setLastUpdated, setTree } from "../features/content/contentSlice";
import { getAuthToken, getGithubAppJWT } from "../fetch/AIMFetch";
import {
  getCommit,
  getGithubAppInstallations,
  getGithubInstallationAccessTokens,
  getGithubTree,
} from "../fetch/GithubFetch";
import { owner, repo } from "../igendoc.config";

export const OutletWrapper = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const lastUpdated: string = useSelector(
    (state: any) => state.content.lastUpdated
  );
  const dispatch = useDispatch();

  const fetchToken = useCallback(async () => {
    const lastUpdatedTime = new Date(lastUpdated);
    const now = new Date();
    const timeDifference = now.getTime() - lastUpdatedTime.getTime();
    const oneHourInMs = 1000 * 60 * 60;
    if (!lastUpdated || timeDifference >= oneHourInMs) {
      const authToken = await getAuthToken("tungxd301@gmail.com");
      dispatch(setAuthToken(authToken));
      const jwt = await getGithubAppJWT(authToken);
      const installations = await getGithubAppInstallations(jwt);
      const installation = installations.find(
        (installation) =>
          installation.app_id.toString() === process.env.REACT_APP_GITHUB_APP_ID
      );
      if (installation) {
        const installationId = installation.id.toString();
        const githubInstallationToken = await getGithubInstallationAccessTokens(
          jwt,
          installationId
        );
        dispatch(setGithubInstallationToken(githubInstallationToken));
        const commit = await getCommit(
          githubInstallationToken?.token || "",
          owner,
          repo
        );
        const githubTree = await getGithubTree(
          githubInstallationToken?.token || "",
          owner,
          repo,
          commit?.sha
        );
        if (githubTree) {
          dispatch(
            setTree(
              githubTree.tree.filter((tree) => tree.path.startsWith("src/"))
            )
          );
        }
      }
      dispatch(setLastUpdated(now.toISOString()));
    }
  }, [dispatch, lastUpdated]);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return <div {...props} />;
};
