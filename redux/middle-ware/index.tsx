import { applyMiddleware } from "redux";
import { booking } from "./booking";
import { user } from "./user";
import { corporate } from "./corporate";
import { corporate_employees } from "./corporate/employees";

export default applyMiddleware(booking, user, corporate, corporate_employees);
