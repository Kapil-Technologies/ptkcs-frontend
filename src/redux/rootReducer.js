import { combineReducers } from "@reduxjs/toolkit";
import EnquiryReducer from "./slices/Enquiry";
import DomainReducer from "./slices/Domain";

export const rootReducers = combineReducers({
  enquiry: EnquiryReducer,
  domain: DomainReducer,
});
