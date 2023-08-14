import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.authModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.authModalOpen = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = modalSlice.actions;

export default modalSlice.reducer;
