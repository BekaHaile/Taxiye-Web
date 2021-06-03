import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

interface props {
    googleMapURL?: string
    loadingElement: any
    containerElement: any
    mapElement: any
    places?: any,
    action?,
    directionAction?
    originAction?
}


function Map({ originAction, directionAction, googleMapURL, loadingElement, containerElement, mapElement, places, action }: props) {
    const [directions, setDirection] = useState(null);
    const directionsService = new google.maps.DirectionsService();

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

                    } else {
                        console.log(result);
                    }
                }
            );
    }


    return (
        <GoogleMap
            {...googleMapURL}
            {...loadingElement}
            {...containerElement}
            {...mapElement}
            defaultZoom={3}
            defaultCenter={{lat:7, lng:10}}

        >
            {
                directions && <DirectionsRenderer
                    key={directions}
                    directions={directions} />
            }


        </GoogleMap>
    );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default WrappedMap;