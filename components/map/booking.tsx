import React, { useState, useEffect } from 'react';
import theme from '../../theme/main';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer, InfoWindow } from "react-google-maps";

interface props {
    loadingElement: any
    containerElement: any
    mapElement: any
    places?: any,
    action?,
    directionAction?
    originAction?
}


function Map({ originAction, directionAction, loadingElement, containerElement, mapElement, places, action }: props) {
    if(google==null)
    return null;
    const [directions, setDirection] = useState(null);
    const directionsService = new google.maps.DirectionsService();
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (directionAction) {
            handleDestination(directionAction, originAction);
        }
    }, [directionAction, originAction]);


    const handleDestination = (des, org) => {

        var request = {
            "origin": org,
            "destination": des,
            "travelMode": google.maps.TravelMode.DRIVING
        };

        directionsService.route(
            request,
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {

                    setDirection(
                        result
                    );
                    var leg = result.routes[0].legs[0];
                    var s = makeMarker(leg.start_location, "start");
                    var e = makeMarker(leg.end_location, "end");
                    setMarkers([s, e]);

                } else {
                    console.log(result);
                }
            }
        );
    }


    return (
        <GoogleMap
            {...loadingElement}
            {...containerElement}
            {...mapElement}
            defaultZoom={3}
            defaultCenter={{ lat: 7, lng: 10 }}

        >
            {
                directions && <DirectionsRenderer
                    key={directions}
                    options={{
                        draggable: true,
                        suppressMarkers: true,
                        polylineOptions: {
                            strokeOpacity: 0.9,
                            strokeColor: `${theme.colors.primary}`,
                        },
                    }
                    }
                    onDirectionsChanged={() => console.log(directions)}
                    directions={directions} />
            }
            {markers}


        </GoogleMap>
    );

}
function makeMarker(position, type) {
    return <Marker
        key={position}
        position={position}
        icon={{
            url: type == "start" ? require("../../assets/icons/origin.svg") : require("../../assets/icons/destination.svg"),
            scaledSize: new google.maps.Size(30, 30)
        }}
        
    />
}




const WrappedMap = withGoogleMap(Map);


export default WrappedMap;