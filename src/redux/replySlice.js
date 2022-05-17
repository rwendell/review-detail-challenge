import { createSlice } from "@reduxjs/toolkit";

export const replySlice = createSlice({
  name: "replySlice",
  initialState: {},
  reducers: {
    update: (state, action) => {
      const { id } = action.payload;
      state[id] = action.payload;
    },
  },
});

export const { update } = replySlice.actions;

export default replySlice.reducer;
