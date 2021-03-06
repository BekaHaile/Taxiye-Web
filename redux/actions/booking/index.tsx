import * as actions from "../../types/booking";

export const selectOrigin = ({ origin }) => {
  return {
    type: actions.ORIGIN_SELECTED,
    payload: {
      origin: origin,
    },
  };
};

export const selectDestination = ({ destination }) => ({
  type: actions.DESTINATION_SELECTED,
  payload: {
    destination: destination,
  },
});

export const changeDate = (date) => ({
  type: actions.DATE_ADDED,
  payload: {
    date: date,
  },
});

export const changeTime = (time) => ({
  type: actions.TIME_ADDED,
  payload: {
    time: time,
  },
});

export const changePackage = (packageData) => ({
  type: actions.PACKAGE_SELECTED,
  payload: {
    package: packageData,
  },
});

export const changeBookingType = (type) => ({
  type: actions.BOOKING_TYPE_CHANGED,
  payload: {
    type: type,
  },
});

export const changeJourneyType = (type) => ({
  type: actions.JOURNEY_TYPE_CHANGED,
  payload: {
    type: type,
  },
});

export const changeJourneyDate = (date) => ({
  type: actions.JOURNEY_DATE_CHANGED,
  payload: {
    date: date,
  },
});

export const changeJourneyTime = (time) => ({
  type: actions.JOURNEY_TIME_CHANGED,
  payload: {
    time: time,
  },
});

export const validateInput = (isValid) => ({
  type: actions.INPUT_VALIDATED,
  payload: {
    isValid: isValid,
  },
});

export const addCities = (cities) => ({
  type: actions.CITIES_ADDED,
  payload: {
    cities: cities,
  },
});

export const addVehicles = (city, currency, drivers, vehicles) => ({
  type: actions.VEHICLES_ADDED,
  payload: {
    vehicles: vehicles,
    city: city,
    currency: currency,
    drivers: drivers,
  },
});

export const addAvailableVehicles = (availableVehicles) => ({
  type: actions.AVAILABLE_VEHICLES_ADDED,
  payload: {
    availableVehicles: availableVehicles,
  },
});

export const loadVehicles = (loading) => ({
  type: actions.VEHICLES_LOADING,
  payload: {
    loading: loading,
  },
});

export const loadingAvailbleVehicles = (loading) => ({
  type: actions.AVAILABLE_VEHICLES_LOADING,
  payload: {
    loading: loading,
  },
});

export const changePayemntMethod = (paymentMethod) => ({
  type: actions.PAYMENT_METHOD_CHANGED,
  payload: {
    paymentMethod: paymentMethod,
  },
});

export const addCoupon = (couponCode) => ({
  type: actions.COUPON_ADDED,
  payload: {
    couponCode: couponCode,
  },
});

export const addNote = (note) => ({
  type: actions.NOTE_ADDED,
  payload: {
    note: note,
  },
});

export const selectVehicle = (vehicle) => ({
  type: actions.VEHICLE_SELECTED,
  payload: {
    vehicle: vehicle,
  },
});

export const confirmRequest = () => ({
  type: actions.REQUEST_CONFIRMED,
});

export const assignDriver = (driver) => ({
  type: actions.DRIVER_ASSIGNED,
  payload: {
    driver: driver,
  },
});

export const rideStarted = (message) => ({
  type: actions.RIDE_STARTED,
  payload:{
    message: message
  }
});

export const rideArrived = (message) => ({
  type: actions.RIDE_ARRIVED,
  payload:{
    message :message
  }
});

export const rideNotFound = (message) => ({
  type: actions.RIDE_STATUS_CHANGED,
  payload:{
    message
  }
});

export const cancelRequest = () => ({
  type: actions.REQUEST_CANCELED,
});

export const resetState = () => ({
  type: actions.RESET_STATE,
});

export const setRequestInfo = (request_info) => ({
  type: actions.REQUEST_MADE,
  payload: {
    request_info: request_info,
  },
});

export const cancelBookingRequestOnLoad = () => ({
  type: actions.REQUEST_CANCEL_INITIATED,
});
export const cancelBookingRequestFinished = () => ({
  type: actions.REQUEST_CANCEL_FINISHED,
});

export const setRequestLoading = (cancelRequestLoading) => ({
  type: actions.REQUEST_LOADING_CHANGED,
  payload: {
    cancelRequestLoading: cancelRequestLoading,
  },
});

export const submitTerminatioReason = (reason) => ({
  type: actions.TERMINATION_REASON_ADDED,
  payload: {
    reason: reason,
  },
});

export const setStep = (step) => ({
  type: actions.STEP_CHANGED,
  payload: {
    step: step,
  },
});

export const setLandmark = (landmark) => ({
  type: actions.LANDMARK_ADDED,
  payload: {
    landmark: landmark,
  },
});

export const setHouseNumber = (house_number) => ({
  type: actions.HOUSE_NUMBER_ADDED,
  payload: {
    house_number: house_number,
  },
});

export const setIsAddressValid = (isAddressValid) => ({
  type: actions.VALIDATED_ADDRESS,
  payload: {
    isAddressValid: isAddressValid,
  },
});

export const selectDelivery = () => ({
  type: actions.DELIVERY_SELECTED,
});

export const changeDeliveryComment = (comment) => ({
  type: actions.DELIVERY_COMMENT_CHANGED,
  payload: {
    comment: comment,
  },
});

export const uploadDeliveryItemImages = (image) => ({
  type: actions.DELIVERY_IMAGES_UPLOADED,
  payload: {
    image: image,
  },
});

export const addDeliveryItemImages = (images) => ({
  type: actions.DELIVERY_IMAGES_ADDED,
  payload: {
    images: images,
  },
});

export const removeDeliveryItemImages = (index) => ({
  type: actions.DELIVERY_IMAGE_REMOVED,
  payload: {
    index: index,
  },
});

export const setPaymentMethods = (payment_methods) => ({
  type: actions.PAYMENT_METHODS_FETCHED,
  payload: {
    payment_methods: payment_methods,
  },
});
export const initiatePaymentMethodCall = () => ({
  type: actions.FETCH_PAYMENT_METHOD_CALLED,
});

export const getFareEstimate = () => ({
  type: actions.FETCH_FARE_ESTIMATE_INITIATED,
});
export const setFareEstimate = (estimation) => ({
  type: actions.FARE_ESTIMATE_FETCHED,
  payload: {
    estimation: estimation,
  },
});

export const setFareEstimateLoading = (fareEstimateLoading) => ({
  type: actions.FARE_LOADING_STATE_CHANGED,
  payload: {
    fareEstimateLoading: fareEstimateLoading,
  },
});

export const setPaymentMethodLoading = (paymentMethodLoading) => ({
  type: actions.PAYMENT_LOADING_STATE_CHANGED,
  payload: {
    paymentMethodLoading: paymentMethodLoading,
  },
});
