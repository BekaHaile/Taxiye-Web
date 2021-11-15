import React, { useState, useEffect } from "react";
import theme from "../../theme/main";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
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
  const [markers, setMarkers] = useState([]);
  const [showMyLocation, setShowMyLocation] = useState(false);
  const [zoom, setZoom] = useState(10);
  const defaultOrigin = { lat: 8.9868767, lng: 38.78678798 };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (directionAction) {
      handleDestination(directionAction);
    }
  }, [directionAction]);

  const getCurrentLocation = () => {
    try {
      navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          setOrigin(pos);
          setZoom(13);
        }
      );
    } catch (e) {}
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
          var leg = result.routes[0].legs[0];
          var s = makeMarker(leg.start_location, "start");
          var e = makeMarker(leg.end_location, "end");
          setMarkers([s, e]);
        } else {
          console.log(result);
        }
      });
  };

  return (
    <GoogleMap
      {...loadingElement}
      {...containerElement}
      {...mapElement}
      defaultZoom={zoom}
      zoom={zoom}
      defaultCenter={origin ?? { lat: 8.9868767, lng: 38.78678798 }}
      onIdle={() => getCurrentLocation()}
      onClick={() => {
        action(null);
        setPrevSelected(false);
      }}
    >
      {places &&
        places.map((place) => {
          if (
            directions != null &&
            directionAction.lat == place.lat &&
            directionAction.lng == place.lng
          )
            return;
          return (
            <Marker
              key={`${place.lng}-${place.lat}`}
              position={{ lat: place.lat, lng: place.lng }}
              icon={{
                url: require("../../assets/icons/taxiye_location.svg"),
              }}
              onClick={() => {
                setAction(place);
              }}
            />
          );
        })}

      {directions ? (
        <DirectionsRenderer
          key={directions}
          options={{
            draggable: false,
            suppressMarkers: true,

            polylineOptions: {
              strokeOpacity: 0.9,
              strokeColor: `${theme.colors.primary}`,
            },
          }}
          directions={directions}
        />
      ) : origin && (
        <Marker
          onClick={() => setShowMyLocation(true)}
          key={
            origin
              ? `${origin.lng}-${origin.lat}`
              : `${defaultOrigin.lng}-${defaultOrigin.lat}`
          }
          position={origin ?? defaultOrigin}
          icon={{
            url: require("../../assets/icons/marker.svg"),
            scaledSize: new google.maps.Size(25, 25),
          }}
        >
          {showMyLocation ? (
            <InfoWindow onCloseClick={() => setShowMyLocation(false)}>
              <h3>You are here 😊!</h3>
            </InfoWindow>
          ) : null}
        </Marker>
      )}
      {directions && markers}
    </GoogleMap>
  );
}

function makeMarker(position, type) {
  return (
    <Marker
      key={position}
      position={position}
      animation={type != "start" ? google.maps.Animation.BOUNCE : null}
      icon={{
        url:
          type == "start"
            ? require("../../assets/icons/pick_up.svg")
            : require("../../assets/icons/drop_off.svg"),
      }}
    />
  );
}

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
