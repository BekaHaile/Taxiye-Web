import React from 'react';
import WrappedMap from "./map";
import Container from "./container";

const Mapview = () => {
    return (
        <>
        <div style={{ width:"100wh",height: "100vh" }}>
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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