import React, { useState, useEffect } from "react";
import theme from "../../theme/main";
import styled from "styled-components";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
} from "react-google-maps";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InnerContainer = styled("div")`
  display: flex;
  gap: 5px;
`;

const Avatar = styled("img")`
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
  display: block;
`;

interface props {
  loadingElement: any;
  containerElement: any;
  mapElement: any;
  places?: any;
  action?;
  directionAction?;
  originAction?;
  listOfVehicles?;
}

function Map({
  listOfVehicles,
  originAction,
  directionAction,
  loadingElement,
  containerElement,
  mapElement,
  places,
  action,
}: props) {
  const [directions, setDirection] = useState(null);
  const directionsService = new google.maps.DirectionsService();
  const [markers, setMarkers] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    if (directionAction) {
      handleDestination(directionAction, originAction);
    }
  }, [directionAction, originAction]);

  const handleDestination = (des, org) => {
    var request = {
      origin: org,
      destination: des,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
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
      defaultZoom={3}
      defaultCenter={{ lat: 7, lng: 10 }}
    >
      {directions && (
        <DirectionsRenderer
          key={directions}
          options={{
            draggable: true,
            suppressMarkers: true,
            polylineOptions: {
              strokeOpacity: 0.9,
              strokeColor: `${theme.colors.primary}`,
            },
          }}
          onDirectionsChanged={() => console.log(directions)}
          directions={directions}
        />
      )}
      {markers}
      {listOfVehicles &&
        listOfVehicles.map((vehicle, index) => (
          <Marker
            onClick={() => setSelectedVehicle(vehicle)}
            key={index}
            position={{
              lat: vehicle.current_latitude,
              lng: vehicle.current_longitude,
            }}
            icon={{
              url: require("../../assets/icons/car.png"),
              scaledSize: new google.maps.Size(15, 22),
            }}
          >
            {selectedVehicle == vehicle && (
              <InfoWindow onCloseClick={() => setSelectedVehicle(null)}>
                <Container>
                  <Avatar src={vehicle.driver_image} />
                  <InnerContainer>
                    <h4>ID:</h4> {vehicle.driver_id}
                  </InnerContainer>
                  <InnerContainer>
                    <h4>Full Name:</h4> {vehicle.name}
                  </InnerContainer>
                  <InnerContainer>
                    <h4>Phone Number:</h4> {vehicle.phone_no}
                  </InnerContainer>
                </Container>
              </InfoWindow>
            )}
          </Marker>
        ))}
    </GoogleMap>
  );
}
function makeMarker(position, type) {
  return (
    <Marker
      key={position}
      position={position}
      icon={{
        url:
          type == "start"
            ? require("../../assets/icons/origin.svg")
            : require("../../assets/icons/destination.svg"),
        scaledSize: new google.maps.Size(30, 30),
      }}
    />
  );
}

const WrappedMap = withGoogleMap(Map);

export default WrappedMap;
