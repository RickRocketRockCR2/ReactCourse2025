import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
  isMenuOpen: false,
};   

//Reducer
const menuSlice = createSlice({
  name: "menu",
  initialState, //Modern JS syntax to set initialState: initialState,
  reducers: {
    TOGGLE_MENU: (state) => { // Immer library allows us to write "mutating" logic in reducers. It doesn't actually mutate the state but uses a proxy to track changes and produce a new immutable state based on those changes. Only receives the current state
      state.isMenuOpen = !state.isMenuOpen;
    },
    CLOSE_MENU: (state) => { // Receives the current state.
      state.isMenuOpen = false;
    },
  },
});

export const { TOGGLE_MENU, CLOSE_MENU } = menuSlice.actions; // Exporting the actions destructured.
export default menuSlice.reducer;

