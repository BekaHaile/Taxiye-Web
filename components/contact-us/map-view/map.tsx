import React from 'react';
import WrappedMap from "../../map";

const MapView = ({setSelectedLocation, offices, directionAction}) => {
    return (
        <>
        <div style={{ width:"100wh",height: "100vh" }}>
            <WrappedMap
                directionAction={directionAction}
                action={setSelectedLocation}
                places={offices}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
        </>
    );
}

export default MapView;