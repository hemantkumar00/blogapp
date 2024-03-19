import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogData: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    add: (state, action) => {
      state.blogData = action.payload.blogData;
    },
    clear: (state) => {
      state.blogData = null;
    },
  },
});

export const { add, clear } = blogSlice.actions;

export default blogSlice.reducer;
