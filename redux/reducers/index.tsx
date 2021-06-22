import { combineReducers } from "redux";
import booking from "./booking";
import user from "./user";
import navigation from "./navigation";
import corporate from "./corporate";

export default combineReducers({
  booking,
  user,
  navigation,
  corporate,
});
