import * as React from "react"
import styled from "styled-components";

const ImageView = styled("div")`
    width: 455px;
    height: 100vh;
    background-image: url(${require("../../assets/images/cars/car.png")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Logo = styled("img")`
margin:11px 20px;
    
`;
const Text = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
color: #FFFFFF;
bottom:0px;
left:20px;
position:absolute;
`;
function Image() {
    return (
        <>
            <div>
            <ImageView >
                <a href="/">
                <Logo src={require("../../assets/images/logo/taxiye.svg")}/>
                </a>
                <Text>Always Moving!</Text>
            </ImageView>
            </div>
            

        </>
    )
}




export default Image
