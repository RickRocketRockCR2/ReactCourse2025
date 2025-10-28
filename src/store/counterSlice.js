import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = { count: 0, attempts: 0, added: 0, };    

//Reducer
const counterSlice = createSlice({
  name: "counter",
  initialState, //Modern JS syntax to set initialState: initialState,
  reducers: {
    incrementAttempts: (state) => { // Immer library allows us to write "mutating" logic in reducers. It doesn't actually mutate the state but uses a proxy to track changes and produce a new immutable state based on those changes. Only receives the current state
      state.attempts += 1;
    },
    incrementCustomObject: (state, action) => { // Receives the current state (as Object) and action. The action contains a payload with the custom amount to increment.
      state.count += action.payload.amount;
      state.added = action.payload.amount;
    },
    incrementCustomPayload: (state, action) => { // Receives the current state (as Payload) and action. The action contains a payload with the custom amount to increment.
      state.count += action.payload;
      state.added = action.payload;
    },    
  },
});

export const counterActions = counterSlice.actions; // Exporting the actions as an object.
export default counterSlice.reducer;
