import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domain: null,
};

const slice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    domainname(state, action) {
      const response = action.payload;
      state.domain = response;
    },
  },
});

export const { domainname } = slice.actions;

export default slice.reducer;

// export const getOpeningData = (data) => {
//   const response = dispatch(slice.actions.jobopening(data));
//   return response;
// };
