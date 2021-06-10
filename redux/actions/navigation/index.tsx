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