import { combineReducers } from "redux";
import contact_us from "./contact-us";
import booking from "./booking";
import user from "./user";
import navigation from "./navigation";
import corporate from "./corporate";
import corporate_employees from "./corporate/employees";
import corporate_home from "./corporate/home";
import corporate_group from "./corporate/group";
import corporate_rides from "./corporate/rides";
import corporate_account from "./corporate/account";
import corporate_requests from "./corporate/requests";
import driver from "./driver";
/**
 * Here combine reducers function is called so as to
 * Create multiple reducers on a single store
 * The stores will be accessed with keys specified here
 */
export default combineReducers({
  contact_us,
  booking,
  user,
  navigation,
  corporate,
  corporate_employees,
  corporate_home,
  corporate_group,
  corporate_rides,
  corporate_requests,
  corporate_account,
  driver,
});
