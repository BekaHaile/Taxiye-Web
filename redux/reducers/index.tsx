import { combineReducers } from "redux";
import booking from "./booking";
import user from "./user";
import navigation from "./navigation";
import corporate from "./corporate";
import corporate_employees from "./corporate/employees";

export default combineReducers({
  booking,
  user,
  navigation,
  corporate,
  corporate_employees
});
