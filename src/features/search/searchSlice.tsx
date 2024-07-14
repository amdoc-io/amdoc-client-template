import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  searchModalOpen?: boolean;
  searchModalContext?: string;
}

const initialState: SearchState = {
  searchModalOpen: false,
  searchModalContext: undefined,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setSearchModalOpen: (state, action: PayloadAction<boolean | undefined>) => {
      state.searchModalOpen = action.payload || false;
    },
    setSearchModalContext: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.searchModalContext = action.payload;
    },
  },
});

export const { setSearchModalOpen, setSearchModalContext } =
  contentSlice.actions;

export default contentSlice.reducer;
