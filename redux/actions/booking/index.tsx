import * as actions from "../../types/booking";

export const originSelected = ({ origin }) => {
    return {
        type: actions.ORIGIN_SELECTED,
        payload: {
            origin: origin
        }
    }
};

export const destinationSelected = ({ destination }) => ({
    type: actions.DESTINATION_SELECTED,
    payload: {
        destination: destination
    }
});

export const dateChanged = (date) => ({
    type: actions.DATE_ADDED,
    payload: {
        date: date
    }
});

export const timeChanged = (time) => ({
    type: actions.TIME_ADDED,
    payload: {
        time: time
    }
});


export const packageChanged = (packageData) => ({
    type: actions.PACKAGE_SELECTED,
    payload: {
        package: packageData
    }
});

export const bookingTypeChanged = (type) => ({
    type: actions.BOOKING_TYPE_CHANGED,
    payload: {
        type: type
    }
});

export const journeyTypeChanged = (type) => ({
    type: actions.JOURNEY_TYPE_CHANGED,
    payload: {
        type: type
    }
});


export const journeyDateChanged = (date) => ({
    type: actions.JOURNEY_DATE_CHANGED,
    payload: {
        date: date
    }
});

export const journeyTimeChanged = (time) => ({
    type: actions.JOURNEY_TIME_CHANGED,
    payload: {
        time: time
    }
});
  

export const inputValidated = (isValid) => ({
    type: actions.INPUT_VALIDATED,
    payload: {
        isValid: isValid
    }
});

