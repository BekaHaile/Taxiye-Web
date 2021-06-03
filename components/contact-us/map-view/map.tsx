import React from 'react';
import WrappedMap from "../../Map";

const Mapview = ({setSelectedLocation, offices, directionAction}) => {
    return (
        <>
        <div style={{ width:"100wh",height: "80vh" }}>
            <WrappedMap
                directionAction={directionAction}
                action={setSelectedLocation}
                places={offices}
                googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=AIzaSyCRNebshVW6XSdv4X2Nxm3FGIt3qbA7UKU"
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
        </>
    );
}

export default Mapview;