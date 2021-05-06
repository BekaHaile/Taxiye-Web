import React from "react";
import styled from "styled-components";

const CardImage = styled("img")`
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  height: 400px;
  width: 100%;
`;

const MapViewer = () => {
    return (
        <>
        <div>
        <CardImage src={require("../../assets/images/Offices-map.png")}/>
        </div>
            

        </>
    );
}

export default MapViewer;