import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GithubInstallationToken } from "../../model/GithubModel";

export interface AuthState {
  authToken?: string;
  githubInstallationToken?: GithubInstallationToken;
}

const initialState: AuthState = {
  authToken: undefined,
  githubInstallationToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
    setGithubInstallationToken: (
      state,
      action: PayloadAction<GithubInstallationToken | undefined>
    ) => {
      state.githubInstallationToken = action.payload;
    },
  },
});

export const { setAuthToken, setGithubInstallationToken } = authSlice.actions;

export default authSlice.reducer;
