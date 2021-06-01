const initialState = {
    origin: {
        address: null,
        location: null
    },
    destination: {
        address: null,
        location: null
    },
    direction: null
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "ORIGIN_SELECTED":
            return { ...state, origin: action.payload.origin };
        case "DESTINATION_SELECTED":
            return { ...state, destination: action.payload.destination };
        case "DIRECTION_CREATED":
            return { ...state, direction: action.payload.direction };
        default:
            return state;
    }
}