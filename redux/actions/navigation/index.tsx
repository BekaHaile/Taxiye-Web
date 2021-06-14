import * as actions from "../../types/navigation";
export const goTo = (page) => {
    return {
        type: actions.NAVIGATION_STARTED,
        payload: {
            page: page
        }
    }
};

export const goBack = () => {
    return {
        type: actions.NAVIGATION_STARTED,

    }
};

export const goFuture = () => {
    return {
        type: actions.NAVIGATION_STARTED,

    }
};

export const showMessage = (show, message, type) => {
    return {
        type: actions.MESSAGE_SHOWED,
        payload: {
            message: {
                show: show,
                text: message,
                type: type
            }
        }

    }
};