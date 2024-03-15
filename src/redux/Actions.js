import { EnquiryActions } from "./slices/Enquiry";
import { LoginActions } from "./slices/Login";
import { RegisterAction } from "./slices/Register";
import { dispatch } from "./store";


export const getLoginDetails = (data) => {
  const response = dispatch(LoginActions.login(data));
  return response;
};

export const getRegisteredUser = (data) => {
  const response = dispatch(RegisterAction.register(data));
  return response;
};

export const EnquiryFrom = (data) => {
   const response = dispatch(EnquiryActions.register(data));
   return response;
}