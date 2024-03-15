import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
  enquiryfrompage: null,
  navigated: null,
};

const slice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    enquiryfrom(state, action) {
      const response = action.payload;
      state.enquiryfrompage = response;
    },
    isNavigated(state, action) {
      const response = action.payload;
      state.navigated = response;
    },
  },
});

export const { enquiryfrom, isNavigated } = slice.actions;

export default slice.reducer;

// export const getOpeningData = (data) => {
//   const response = dispatch(slice.actions.jobopening(data));
//   return response;
// };
