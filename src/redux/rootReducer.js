import { combineReducers } from "@reduxjs/toolkit";
import EnquiryReducer from "./slices/Enquiry";


export const rootReducers = combineReducers({
  enquiry: EnquiryReducer,
});
