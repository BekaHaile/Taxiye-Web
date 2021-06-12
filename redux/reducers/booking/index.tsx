import * as actionsTypes from "../../types/booking";
const initialState = {
    cities: [],
    type: "on-demand",
    city: "",
    origin: {
        address: null,
        location: null
    },
    destination: {
        address: null,
        location: null
    },
    date: new Date(),
    time: "06:30",
    journey: {
        type: "Round Trip",
        returnDate: new Date(),
        returnTime: "06:30"
    },
    vehicles: [],
    fetchVehiclesLoading: false,
    vehicle: null,
    delivery: {
        comment: "",
        images: [],
        type: null
    },
    package: "Round Trip",
    direction: null,
    isValid: false,
    paymentMethod: "Cash",
    couponCode: "",
    note: "",
    driver: null,
    driverLoading: false,
    cancelRide: false,
    reason:""
}

export default function booking(state = initialState, action) {

    switch (action.type) {
        case actionsTypes.ORIGIN_SELECTED:
            return { ...state, origin: action.payload.origin };
        case actionsTypes.DESTINATION_SELECTED:
            return { ...state, destination: action.payload.destination };
        case actionsTypes.INPUT_VALIDATED:
            return { ...state, isValid: action.payload.isValid };

        case actionsTypes.BOOKING_TYPE_CHANGED:
            return { ...state, type: action.payload.type };
        case actionsTypes.DATE_ADDED:
            return { ...state, date: action.payload.date };
        case actionsTypes.TIME_ADDED:
            return { ...state, time: action.payload.time };
        case actionsTypes.PACKAGE_SELECTED:
            return { ...state, package: action.payload.package };
        case actionsTypes.VEHICLES_ADDED:
            return { ...state, vehicles: action.payload.vehicles, city: action.payload.city };
        case actionsTypes.VEHICLES_LOADING:
            return { ...state, fetchVehiclesLoading: action.payload.loading };
        case actionsTypes.VEHICLE_SELECTED:
            return { ...state, vehicle: action.payload.vehicle };

        case actionsTypes.JOURNEY_TYPE_CHANGED:
            return { ...state, journey: { ...state.journey, type: action.payload.type } };
        case actionsTypes.JOURNEY_DATE_CHANGED:
            return { ...state, journey: { ...state.journey, returnDate: action.payload.date } };
        case actionsTypes.JOURNEY_TIME_CHANGED:
            return { ...state, journey: { ...state.journey, returnTime: action.payload.time } };

        case actionsTypes.DELIVERY_TYPE_CHANGED:
            return { ...state, delivery: { ...state.delivery, type: action.payload.type } };
        case actionsTypes.DELIVERY_IMAGES_ADDED:
            return { ...state, delivery: { ...state.delivery, images: action.payload.images } };
        case actionsTypes.DELIVERY_COMMENT_CHANGED:
            return { ...state, delivery: { ...state.delivery, comment: action.payload.comment } };

        case actionsTypes.CITIES_ADDED:
            return { ...state, cities: action.payload.cities };

        case actionsTypes.PAYMENT_METHOD_CHANGED:
            return { ...state, paymentMethod: action.payload.paymentMethod };
        case actionsTypes.COUPON_ADDED:
            return { ...state, couponCode: action.payload.couponCode };
        case actionsTypes.NOTE_ADDED:
            return { ...state, note: action.payload.note };

        case actionsTypes.REQUEST_CONFIRMED:
            return { ...state, driverLoading: true };
        case actionsTypes.DRIVER_ASSIGNED:
            return { ...state, driver: action.payload.driver, driverLoading: false };

        case actionsTypes.REQUEST_CANCELED:
            return { ...state, cancelRide: true };
        case actionsTypes.TERMINATION_REASON_ADDED:
            return { ...state, reason: action.payload.reason, cancelRide: false };
        default:
            return state;
    }
}
