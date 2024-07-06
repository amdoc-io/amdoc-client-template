import axios from "axios";
import {
  AIM_GET_AUTH_TOKEN_URL,
  AIM_GET_GITHUB_APP_JWT_PROXY_URL,
} from "../endpoints/AIMEndpoint";
import { createHeader } from "../utils/FetchUtils";

export const getAuthToken = async (email: string) => {
  return await axios
    .get(`${AIM_GET_AUTH_TOKEN_URL}?email=${email}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return undefined;
    });
};

export const getGithubAppJWT = async (token: string) => {
  return await axios
    .get(`${AIM_GET_GITHUB_APP_JWT_PROXY_URL}`, createHeader(token))
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return undefined;
    });
};
