import * as actions from "../../../actions/corporate/employees";
import axios from "axios";
import { showError } from "../../common";
export async function getVehicles(data, next) {
   
  if (
    data["origin"].location !== null &&
    data["destination"].location !== null &&
    data["date"] !== null &&
    data["time"] !== null &&
    data["selected_employee"] !== null
  ) {
    
    next(actions.setLoading(true));
    try {
      let res = await fetchVehicles(data["origin"].location);
      if (res) {
        next(
          actions.addVehicles(
            res.city ? res.city : "",
            Array.from(res.vehicles)
          )
        );
        next(actions.validateInput(true));
      }
    } catch (e) {
      showError(next);
      next(actions.setLoading(false));
    }
    next(actions.setLoading(false));
  }
}

export async function fetchVehicles(body) {
  try {
    const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
    const res = await axios.post(
      `${NEXT_PUBLIC_AGGREGATE_HOST}/ride/available-vehicles`,
      body,
      { timeout: 5000 }
    );
    return res.data;
  } catch (e) {
    throw e;
    return null;
  }
}
