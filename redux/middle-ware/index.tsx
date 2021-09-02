import { applyMiddleware } from "redux";
import { booking } from "./booking";
import { user } from "./user";
import { corporate } from "./corporate";
import { corporate_employees } from "./corporate/employees";
import { corporate_home } from "./corporate/home";
import { corporate_group } from "./corporate/group";
import { corporate_rides } from "./corporate/rides";
import { corporate_requests } from "./corporate/requests";
import { corporate_account } from "./corporate/account";
import { contact_us } from "./contact-us";
import { driver } from "./driver";

export default applyMiddleware(
  booking,
  user,
  corporate,
  corporate_employees,
  corporate_home,
  corporate_group,
  corporate_rides,
  corporate_requests,
  corporate_account,
  contact_us,
  driver
);
