import * as actions from "../../../actions/booking";
import { loadVehicleTypes } from "../common";
import { showError } from "../../common";

export async function getOutStationVehicleInfo(data, next) {
  if (
    data["origin"].location !== null &&
    data["destination"].location !== null &&
    data["date"] !== null &&
    data["time"] !== null &&
    data["journey"].type !== null &&
    data["journey"].returnDate !== null &&
    data["journey"].returnTime !== null
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
