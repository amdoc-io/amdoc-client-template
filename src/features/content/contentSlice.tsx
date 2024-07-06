import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GithubTree } from "../../model/GithubModel";

export interface AuthState {
  tree?: GithubTree[];
  lastUpdated?: string;
}

const initialState: AuthState = {
  tree: [],
  lastUpdated: undefined,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setTree: (state, action: PayloadAction<GithubTree[]>) => {
      state.tree = action.payload;
    },
    setLastUpdated: (state, action: PayloadAction<string>) => {
      state.lastUpdated = action.payload;
    },
  },
});

export const { setTree, setLastUpdated } = contentSlice.actions;

export default contentSlice.reducer;
