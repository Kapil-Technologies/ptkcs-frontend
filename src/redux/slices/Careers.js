import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  jobobject: null,
};

const slice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    jobopening(state, action) {
      const response = action.payload;
      state.jobobject = response;
    },
  },
});

export const CareerActions = slice.actions;

export default slice.reducer;

// export const getOpeningData = (data) => {
//   const response = dispatch(slice.actions.jobopening(data));
//   return response;
// };
