import * as React from "react"
import styled from "styled-components";
import Link from "next/link";

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
function Image({ hero }:{hero?: any}) {
    let url = require("../../assets/images/cars/car.png");
    let title = "";
    if(hero!=null){
    url = `${process.env.NEXT_PUBLIC_HOST}${hero.background.url}`;
    title = hero.title;
    }
    
    const ImageView = styled("div")`
    width: 455px;
    height: 100vh;
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
    return (
        <>
            <div>
                <ImageView >
                    <Link href="/">
                        <Logo src={require("../../assets/images/logo/taxiye.svg")} />
                    </Link>
                    <Text>{title}</Text>
                </ImageView>
            </div>


        </>
    );
}




export default Image
