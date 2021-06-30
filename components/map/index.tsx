import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";

interface props {
  loadingElement: any;
  containerElement: any;
  mapElement: any;
  places?: any;
  action?;
  directionAction?;
  originAction?;
}

function Map({
  directionAction,
  loadingElement,
  containerElement,
  mapElement,
  places,
  action,
}: props) {
  const [directions, setDirection] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [prevSelected, setPrevSelected] = useState(false);
  const directionsService = new google.maps.DirectionsService();
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (directionAction) {
      handleDestination(directionAction);
    }
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
    setDirection(null);
    action(null);
    if (prevSelected)
      setTimeout(function () {
        action(place);
      }, 500);
    else action(place);
    setPrevSelected(true);
  };
  const handleDestination = (des) => {
    var request = {
      origin: origin,
      destination: des,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    if (origin)
      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          if (action) action(null);
          setDirection(result);
        } else {
          console.log(result);
        }
      });
  };

  if (origin == null) return null;
  return (
    <GoogleMap
      {...loadingElement}
      {...containerElement}
      {...mapElement}
      defaultZoom={13}
      defaultCenter={origin}
      onIdle={() => getCurrentLocation()}
      onClick={() => {
        action(null);
        setPrevSelected(false);
      }}
    >
      <Marker
        key={`${origin.lng}-${origin.lat}`}
        position={origin}
        icon={{
          url: require("../../assets/icons/marker.svg"),
          scaledSize: new google.maps.Size(50, 50),
        }}
      />

      {places &&
        places.map((place) => {
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

      {directions && (
        <DirectionsRenderer key={directions} directions={directions} />
      )}
    </GoogleMap>
  );
}

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
