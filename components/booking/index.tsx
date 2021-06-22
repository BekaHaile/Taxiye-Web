import React from 'react';
import WrappedMap from "../Map/booking";
import Container from "./container";
import { useSelector } from "react-redux";

const Mapview = () => {
    const origin = useSelector((state) => state["booking"]["origin"]);
    const destination = useSelector((state) => state["booking"]["destination"]);
    return (
        <>
            <div style={{ zIndex:10000 ,width: "100wh", height: "100vh" }}>
                <WrappedMap
                    
                    originAction={origin.location}
                    directionAction={destination.location}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRNebshVW6XSdv4X2Nxm3FGIt3qbA7UKU&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
            <Container />
        </>
    );
}

export default Mapview;