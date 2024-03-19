import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import blogSlice from "./blogSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //TODO: add more slices here for posts
    blog: blogSlice,
  },
});

export default store;
