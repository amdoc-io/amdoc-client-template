import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  searchModalOpen?: boolean;
}

const initialState: SearchState = {
  searchModalOpen: false,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setSearchModalOpen: (state, action: PayloadAction<boolean | undefined>) => {
      state.searchModalOpen = action.payload || false;
    },
  },
});

export const { setSearchModalOpen } = contentSlice.actions;

export default contentSlice.reducer;
