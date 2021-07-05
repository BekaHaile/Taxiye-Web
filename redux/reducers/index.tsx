import { combineReducers } from "redux";
import contact_us from "./contact-us";
import booking from "./booking";
import user from "./user";
import navigation from "./navigation";
import corporate from "./corporate";
import corporate_employees from "./corporate/employees";
import driver from "./driver";

/*
// Here combine reducers function is called so as to
// Create multiple reducers on a single store
// The stores will be accessed with keys specified here 
*/
export default combineReducers({
  contact_us,
  booking,
  user,
  navigation,
  corporate,
  corporate_employees,
  driver
});
