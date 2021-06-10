import * as actions from "../../actions/booking";
import * as navigationActions from "../../actions/navigation";
import axios from "axios";
import { setLoading } from "../../actions/user";
export const booking = (store) => (next) => async (action) => {

    next(action);
    let data = store.getState().booking;

    if (action.type == "DESTINATION_SELECTED" || action.type == "ORIGIN_SELECTED") {


        if (data["origin"].location !== null && data["destination"].location !== null) {
            next(actions.loadVehicles(true));
            try {
                let res = await fetchVehicles(data["origin"].location);
                if (res) {
                    next(actions.addVehicles(res.city ? res.city : "", Array.from(res.vehicles)));
                    next(actions.validateInput(true));
                }
            } catch (e) {

            }
            next(actions.loadVehicles(false));
        }


    }

    else if (action.type == "VEHICLE_SELECTED") {
        data["userData"] ?
            next(navigationActions.goTo("confirm")) :
            next(navigationActions.goTo("login"));

    }
    else if (action.type == "OTP_SUBMITTED") {
        data["userData"] ?
            next(navigationActions.goTo("confirm")) :
            next(navigationActions.goTo("login"));
    }
    else if (action.type == "REQUEST_CONFIRMED") {
        next(navigationActions.goTo("approve"));
        await sleep(3000);
        next(actions.assignDriver(
            {
                profile: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
                firstName: "Girma",
                lastName: "Tefera",
                plateNumber: "AB12345",
                vehicleName: "Taxiye-Sedan",
                rating: 4.5,
                phoneNumber: "+251911399622",
                arrivingIn: "2 Mins"
            }
        ));
    }

};


async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function fetchVehicles(location) {
    try {
        const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
        const res = await axios.post(`${NEXT_PUBLIC_AGGREGATE_HOST}/ride/available-vehicles`, location);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

