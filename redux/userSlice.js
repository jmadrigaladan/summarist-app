import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  uid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.email = action.payload.email), (state.uid = action.payload.uid);
    },

    signOutUser: (state) => {
      (state.email = null), (state.uid = null);
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
