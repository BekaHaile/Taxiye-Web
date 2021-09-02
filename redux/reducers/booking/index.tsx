import * as actionTypes from "../../types/booking";
let date = new Date();
const initialState = {
  cities: [],
  payment_methods: [],
  type: "on_demand",
  currency: "ETB",
  drivers: [],
  estimation: null,
  city: "",
  origin: {
    address: null,
    location: null,
  },
  destination: {
    address: null,
    location: null,
  },
  date: date,
  time: ("0" + date.getHours()).slice(-2) + ":" + date.getMinutes(),
  journey: {
    type: "Round Trip",
    returnDate: date,
    returnTime: ("0" + date.getHours()).slice(-2) + ":" + date.getMinutes(),
  },
  vehicles: [],
  fetchVehiclesLoading: false,
  availableVehiclesLoading: false,
  vehicle: null,
  availableVehicles: [],
  delivery: {
    comment: "",
    images: [],
    image: null,
  },
  package: "Round Trip",
  direction: null,
  isValid: false,
  paymentMethod: "Cash",
  couponCode: "",
  note: "",
  driver: null,
  driverLoading: false,
  paymentMethodLoading: false,
  fareEstimateLoading: false,
  cancelRide: false,
  reason: "",
  landmark: "",
  house_number: "",
  isAddressValid: false,
};

export default function booking(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ORIGIN_SELECTED:
      return { ...state, origin: action.payload.origin };
    case actionTypes.DESTINATION_SELECTED:
      return { ...state, destination: action.payload.destination };
    case actionTypes.INPUT_VALIDATED:
      return { ...state, isValid: action.payload.isValid };

    case actionTypes.BOOKING_TYPE_CHANGED:
      return { ...state, type: action.payload.type, vehicles: [] };
    case actionTypes.DATE_ADDED:
      return { ...state, date: action.payload.date };
    case actionTypes.TIME_ADDED:
      return { ...state, time: action.payload.time };
    case actionTypes.PACKAGE_SELECTED:
      return { ...state, package: action.payload.package };
    case actionTypes.VEHICLES_ADDED:
      return {
        ...state,
        vehicles: action.payload.vehicles,
        city: action.payload.city,
        currency: action.payload.currency,
        drivers: action.payload.drivers,
        availableVehicles: [],
      };
    case actionTypes.VEHICLES_LOADING:
      return { ...state, fetchVehiclesLoading: action.payload.loading };
    case actionTypes.AVAILABLE_VEHICLES_LOADING:
      return { ...state, availableVehiclesLoading: action.payload.loading };
    case actionTypes.VEHICLE_SELECTED:
      return { ...state, vehicle: action.payload.vehicle };
    case actionTypes.AVAILABLE_VEHICLES_ADDED:
      return { ...state, availableVehicles: action.payload.availableVehicles };

    case actionTypes.JOURNEY_TYPE_CHANGED:
      return {
        ...state,
        journey: { ...state.journey, type: action.payload.type },
      };
    case actionTypes.JOURNEY_DATE_CHANGED:
      return {
        ...state,
        journey: { ...state.journey, returnDate: action.payload.date },
      };
    case actionTypes.JOURNEY_TIME_CHANGED:
      return {
        ...state,
        journey: { ...state.journey, returnTime: action.payload.time },
      };

    case actionTypes.PAYMENT_METHODS_FETCHED:
      return { ...state, payment_methods: action.payload.payment_methods };

    case actionTypes.PAYMENT_LOADING_STATE_CHANGED:
      return {
        ...state,
        paymentMethodLoading: action.payload.paymentMethodLoading,
      };

    case actionTypes.DELIVERY_IMAGES_ADDED: {
      return {
        ...state,
        delivery: {
          ...state.delivery,
          images: [...state.delivery.images, action.payload.images],
        },
      };
    }
    case actionTypes.DELIVERY_IMAGES_UPLOADED: {
      return {
        ...state,
        delivery: { ...state.delivery, image: action.payload.image },
      };
    }

    case actionTypes.DELIVERY_IMAGE_REMOVED: {
      return {
        ...state,
        delivery: {
          ...state.delivery,
          images: [
            ...state.delivery.images.slice(0, action.payload.index),
            ...state.delivery.images.slice(action.payload.index + 1),
          ],
        },
      };
    }

    case actionTypes.DELIVERY_COMMENT_CHANGED:
      return {
        ...state,
        delivery: { ...state.delivery, comment: action.payload.comment },
      };

    case actionTypes.CITIES_ADDED:
      return { ...state, cities: action.payload.cities };

    case actionTypes.FARE_ESTIMATE_FETCHED:
      return { ...state, estimation: action.payload.estimation };
    case actionTypes.FARE_LOADING_STATE_CHANGED:
      return {
        ...state,
        fareEstimateLoading: action.payload.fareEstimateLoading,
      };

    case actionTypes.PAYMENT_METHOD_CHANGED:
      return { ...state, paymentMethod: action.payload.paymentMethod };
    case actionTypes.COUPON_ADDED:
      return { ...state, couponCode: action.payload.couponCode };
    case actionTypes.NOTE_ADDED:
      return { ...state, note: action.payload.note };

    case actionTypes.REQUEST_CONFIRMED:
      return { ...state, driverLoading: true };
    case actionTypes.DRIVER_ASSIGNED:
      return { ...state, driver: action.payload.driver, driverLoading: false };

    case actionTypes.REQUEST_CANCELED:
      return { ...state, cancelRide: true };
    case actionTypes.TERMINATION_REASON_ADDED:
      return { ...state, reason: action.payload.reason, cancelRide: false };

    case actionTypes.STEP_CHANGED:
      return { ...state, step: action.payload.step };

    case actionTypes.HOUSE_NUMBER_ADDED:
      return { ...state, house_number: action.payload.house_number };
    case actionTypes.LANDMARK_ADDED:
      return { ...state, landmark: action.payload.landmark };
    case actionTypes.VALIDATED_ADDRESS:
      return { ...state, isAddressValid: action.payload.isAddressValid };

    default:
      return state;
  }
}
