import React from 'react';
import WrappedMap from "../../../map/booking";
import { useSelector } from "react-redux";
import Container from "./container";

const Mapview = () => {
    const origin = useSelector((state) => state["corporate_employees"]["origin"]);
    const destination = useSelector((state) => state["corporate_employees"]["destination"]);
    return (
        <>
            <div style={{ zIndex:10000 ,width: "100%", height: "100%" }}>
                <WrappedMap
                    
                    originAction={origin.location}
                    directionAction={destination.location}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
            <Container/>
        </>
    );
}

export default Mapview;