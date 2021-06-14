
import * as actions from "../../../actions/booking";
import { fetchVehicles } from "../common";

export async function getOnDemandVehicleInfo(data, next) {
    if (data["origin"].location !== null &&
        data["destination"].location !== null &&
        data["date"] !== null &&
        data["time"] !== null) {
        next(actions.loadVehicles(true));
        try {
            let res = await fetchVehicles(data["origin"].location);
            if (res) {
                next(actions.addVehicles(res.city ? res.city : "", Array.from(res.vehicles)));
                next(actions.validateInput(true));
            }
        } catch (e) {
            next(actions.loadVehicles(false));
        }
        next(actions.loadVehicles(false));
    }
}