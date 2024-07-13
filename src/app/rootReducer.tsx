import { combineReducers } from "@reduxjs/toolkit";
import persistedReducer from "./reduxPersistConfig";
import authSlice from "../features/auth/authSlice";
import contentSlice from "../features/content/contentSlice";
import searchSlice from "../features/search/searchSlice";

const appReducer = combineReducers({
  auth: authSlice,
  content: contentSlice,
  search: searchSlice,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default persistedReducer(rootReducer);
