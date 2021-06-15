import * as actions from "../../types/booking";

export const selectOrigin = ({ origin }) => {
    return {
        type: actions.ORIGIN_SELECTED,
        payload: {
            origin: origin
        }
    }
};

export const selectDestination = ({ destination }) => ({
    type: actions.DESTINATION_SELECTED,
    payload: {
        destination: destination
    }
});

export const changeDate = (date) => ({
    type: actions.DATE_ADDED,
    payload: {
        date: date
    }
});

export const changeTime = (time) => ({
    type: actions.TIME_ADDED,
    payload: {
        time: time
    }
});


export const changePackage = (packageData) => ({
    type: actions.PACKAGE_SELECTED,
    payload: {
        package: packageData
    }
});

export const changeBookingType = (type) => ({
    type: actions.BOOKING_TYPE_CHANGED,
    payload: {
        type: type
    }
});

export const changeJourneyType = (type) => ({
    type: actions.JOURNEY_TYPE_CHANGED,
    payload: {
        type: type
    }
});


export const changeJourneyDate = (date) => ({
    type: actions.JOURNEY_DATE_CHANGED,
    payload: {
        date: date
    }
});

export const changeJourneyTime = (time) => ({
    type: actions.JOURNEY_TIME_CHANGED,
    payload: {
        time: time
    }
});


export const validateInput = (isValid) => ({
    type: actions.INPUT_VALIDATED,
    payload: {
        isValid: isValid
    }
});

export const addCities = (cities) => ({
    type: actions.CITIES_ADDED,
    payload: {
        cities: cities
    }
});

export const addVehicles = (city, vehicles) => ({
    type: actions.VEHICLES_ADDED,
    payload: {
        vehicles: vehicles,
        city: city
    }
});

export const loadVehicles = (loading) => ({
    type: actions.VEHICLES_LOADING,
    payload: {
        loading: loading
    }
});

export const changePayemntMethod = (paymentMethod) => ({
    type: actions.PAYMENT_METHOD_CHANGED,
    payload: {
        paymentMethod: paymentMethod
    }
});

export const addCoupon = (couponCode) => ({
    type: actions.COUPON_ADDED,
    payload: {
        couponCode: couponCode
    }
});

export const addNote = (note) => ({
    type: actions.NOTE_ADDED,
    payload: {
        note: note
    }
});

export const selectVehicle = (vehicle) => ({
    type: actions.VEHICLE_SELECTED,
    payload: {
        vehicle: vehicle
    }
});

export const confirmRequest = () => ({
    type: actions.REQUEST_CONFIRMED,

});

export const assignDriver = (driver) => ({
    type: actions.DRIVER_ASSIGNED,
    payload: {
        driver: driver
    }

});

export const cancelRequest = () => ({
    type: actions.REQUEST_CANCELED,
});

export const submitTerminatioReason = (reason) => ({
    type: actions.TERMINATION_REASON_ADDED,
    payload: {
        reason: reason
    }
});

export const setStep = (step) => ({
    type: actions.STEP_CHANGED,
    payload: {
        step: step
    }
});

export const setLandmark = (landmark) => ({
    type: actions.LANDMARK_ADDED,
    payload: {
        landmark: landmark
    }
});

export const setHouseNumber = (house_number) => ({
    type: actions.HOUSE_NUMBER_ADDED,
    payload: {
        house_number: house_number
    }
});

export const setIsAddressValid = (isAddressValid) => ({
    type: actions.VALIDATED_ADDRESS,
    payload: {
        isAddressValid: isAddressValid
    }
});

