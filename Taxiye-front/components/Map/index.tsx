import React, { useState, useEffect } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

interface props {
    googleMapURL: string
    loadingElement: any
    containerElement: any
    mapElement: any
    places?: any,
    action?,
    directionAction?
    direction?
}



function Map({ direction, directionAction, googleMapURL, loadingElement, containerElement, mapElement, places, action }: props) {

    const [directions, setDirection] = useState(null);
    const [hideOrigin, setHide] = useState(false);
    const [origin, setOrigin] = useState({ lat: 9.000234, lng: 38.802343 });
    const directionsService = new google.maps.DirectionsService();

    useEffect(() => {
        if (directionAction)
            handleDestination(directionAction);
    }, [directionAction]);

    const getCurrentLocation = () => {

        navigator?.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat, longitude: lng } }) => {
                const pos = { lat, lng };
                setOrigin(pos);

            }
        );

    };
    const setAction = (place) => {
        setHide(false);
        setDirection(null);
        action(place);
    };
    const handleDestination = (destination) => {

        var request = {
            "origin": origin,
            "destination": destination,
            "travelMode": google.maps.TravelMode.DRIVING
        };

        if (origin)
            directionsService.route(
                request,
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        action(null);
                        setHide(true);
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
            defaultZoom={13}
            defaultCenter={origin}
            onTilesLoaded={() => getCurrentLocation()}
            onClick={() => action(null)}

        >
            {
                !hideOrigin && origin &&
                <Marker
                    key={`${origin.lng}-${origin.lat}`}
                    position={origin}
                    icon={{
                        url: require("../../assets/icons/marker.svg"),
                        scaledSize: new google.maps.Size(50, 50)
                    }}
                />}

            {places && places.map(place => {
                return (

                    <Marker
                        key={`${place.lng}-${place.lat}`}
                        position={{ lat: place.lat, lng: place.lng }}
                        onClick={() => {
                            setAction(place);
                        }}

                    />
                );
            })}
            {
                direction != null ?
                    <DirectionsRenderer
                        key={direction}
                        directions={direction} /> :
                    directions &&
                    <DirectionsRenderer
                        key={directions}
                        directions={directions} />
            }


        </GoogleMap>
    );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default WrappedMap;