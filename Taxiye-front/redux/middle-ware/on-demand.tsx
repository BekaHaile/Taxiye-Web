import * as actions from "../actions/booking/on-demand";
export const middleWare = (store) => (next) => (action) => {
    next(action);
    let data = store.getState();

    const directionsService = new google.maps.DirectionsService();
    var request = {
        "origin": data["origin"].location,
        "destination": data["destination"].location,
        "travelMode": google.maps.TravelMode.DRIVING
    };
    directionsService.route(
        request,
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                next(actions.driectionCreated({ direction: result }));
            } else {
                next(actions.driectionCreated({ direction: null }));
            }
        }
    );

};