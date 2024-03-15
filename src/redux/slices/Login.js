import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginobject: null,
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      const response = action.payload;
      state.loginobject = response;
    },
  },
});

export const LoginActions = slice.actions;

export default slice.reducer;

// export const getOpeningData = (data) => {
//   const response = dispatch(slice.actions.jobopening(data));
//   return response;
// };
