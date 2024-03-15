import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  ruserdetails: null,
};

const slice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register(state, action) {
      const response = action.payload;
      state.ruserdetails = response;
    },
  },
});

export const RegisterAction = slice.actions;

export default slice.reducer;

// export const getOpeningData = (data) => {
//   const response = dispatch(slice.actions.jobopening(data));
//   return response;
// };
