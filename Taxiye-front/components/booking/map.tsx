import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { GoogleMapProps } from 'react-google-maps/lib/components/GoogleMap';


function Map(a: GoogleMapProps) {
    return (
        <GoogleMap
            {...a}
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;