import React from "react";
import WrappedMap from "../map/booking";
import Container from "./container";
import { useSelector } from "react-redux";

const Mapview = () => {
  const origin = useSelector((state) => state["booking"]["origin"]);
  const destination = useSelector((state) => state["booking"]["destination"]);
  const listOfVehicles = useSelector(
    (state) => state["booking"]["availableVehicles"]
  );
  return (
    <>
      <div style={{ zIndex: 10000, width: "100wh", height: "100vh" }}>
        <WrappedMap
          listOfVehicles={listOfVehicles}
          originAction={origin.location}
          directionAction={destination.location}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
      <Container />
    </>
  );
};

export default Mapview;
