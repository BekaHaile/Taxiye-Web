import * as actions from "../../types/booking/on-demand";

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

export const driectionCreated = ({ direction }) => ({
    type: actions.DIRECTION_CREATED,
    payload: {
        direction: direction
    }
});