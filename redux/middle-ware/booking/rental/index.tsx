import * as actions from "../../../actions/booking";
import { loadVehicleTypes } from "../common";
import { showError } from "../../common";

export async function getRentalVehicleInfo(data, next) {
  if (
    data["origin"].location !== null &&
    data["package"] !== null &&
    data["date"] !== null &&
    data["time"] !== null
  ) {
    next(actions.loadVehicles(true));
    try {
     
      await loadVehicleTypes(data, next, actions);
    } catch (e) {
      showError(next);
      next(actions.loadVehicles(false));
    }
    next(actions.loadVehicles(false));
  }
}
