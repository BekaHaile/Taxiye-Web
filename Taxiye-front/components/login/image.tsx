import * as React from "react"
import styled from "styled-components";

const ImageView = styled("img")`
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
function Image() {
    return (
        <>

            <ImageView src={require("../../assets/images/cars/car.png")} />

        </>
    )
}




export default Image
