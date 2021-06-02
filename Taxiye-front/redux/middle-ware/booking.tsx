import * as actions from "../actions/booking";
export const middleWare = (store) => (next) => (action) => {
    next(action);
    if (action.type == "DESTINATION_SELECTED" || action.type == "ORIGIN_SELECTED") {
        let data = store.getState();
        console.log(data["origin"].location !== null && data["destination"].location !== null);
        if (data["origin"].location !== null && data["destination"].location !== null) {
            next(actions.inputValidated(true));
        }
 
    }
};