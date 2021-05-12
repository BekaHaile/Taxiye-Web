import React from "react";
import styled from "styled-components";

const CardImage = styled("img")`
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  width:100%;
  height:500px;
`;

const MapViewer = () => {
    return (
        <>
        <CardImage src={require("../../../assets/images/Offices-map.png")}/>
        </>
    );
}

export default MapViewer;