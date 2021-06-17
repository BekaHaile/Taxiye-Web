
import * as actions from "../../../actions/booking";
import { fetchVehicles } from "../common";
import { showError } from "../../common";

export async function getDeliveryVehicleInfo(data, next) {
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
            showError(next);
            next(actions.loadVehicles(false));
        }
        next(actions.loadVehicles(false));
    }
}

export async function uploadFile(data, next) {
    next(actions.loadVehicles(true));
    try {
        await sleep(2000);
        next(actions.addDeliveryItemImages(data["delivery"]["image"]));
    } catch (e) {
        showError(next);
        next(actions.loadVehicles(false));
    }

    next(actions.loadVehicles(false));
}

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
