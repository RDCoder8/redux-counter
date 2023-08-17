import { createSlice } from '@reduxjs/toolkit';

// in order to import this in another file, you have to destructure
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // the parameter given to the reducer funcitons is the current state ATM or the state before you perform this action. (NOT the initialState)
    increment: (prevState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      prevState.value += 1;
      // state.value = state.value + 1
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload);
    },
  },
});

// in order to import this in another file, you have to destructure
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//don't need to destructure to import
export default counterSlice.reducer;