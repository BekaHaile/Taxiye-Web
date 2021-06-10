import * as actionsTypes from "../../types/navigation";
const initialState = {
    page: ""
}

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {

        case actionsTypes.NAVIGATION_STARTED:
            return { ...state, page: action.payload.page };
        default:
            return state;
    }
}