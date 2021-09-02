import React from 'react';
import WrappedMap from "../../map";

const Mapview = ({setSelectedLocation, offices, directionAction}) => {
    return (
        <>
        <div style={{ width:"100wh",height: "80vh" }}>
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

export default Mapview;