import { combineReducers } from "redux";
import contact_us from "./contact-us";
import booking from "./booking";
import user from "./user";
import navigation from "./navigation";
import corporate from "./corporate";
import corporate_employees from "./corporate/employees";

export default combineReducers({
  contact_us,
  booking,
  user,
  navigation,
  corporate,
  corporate_employees
});
