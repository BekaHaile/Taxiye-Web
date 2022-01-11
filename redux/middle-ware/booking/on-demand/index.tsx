import * as actions from "../../../actions/booking";
import { loadVehicleTypes } from "../../../../services/api/booking/index.api";

export async function getOnDemandVehicleInfo(data, findADriverDto, type, next) {
  if (
    data["origin"].location !== null &&
    data["destination"].location !== null &&
    data["date"] !== null &&
    data["time"] !== null
  ) {
    next(actions.loadVehicles(true));
    try {
      await loadVehicleTypes(findADriverDto, next, type);
    } catch (e) {
      console.log(e);
      next(actions.loadVehicles(false));
    }
    next(actions.loadVehicles(false));
  }
}
