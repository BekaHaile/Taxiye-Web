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

export const inputValidated = (isValid) => ({
    type: actions.INPUT_VALIDATED,
    payload: {
        isValid: isValid
    }
});