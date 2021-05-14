import * as React from "react"
import styled from "styled-components";
import Link from "next/link";

const ImageView = styled("div")`
    width: 455px;
    height: 100vh;
    background-image: url(${require("../../assets/images/cars/car.png")});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const DriverImageView = styled(ImageView)`
    background-image: url(${require("../../assets/images/cars/car.png")});
`;

const CorporateImageView = styled(ImageView)`
    background-image: url(${require("../../assets/images/cars/car.png")});
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
function Image({ type }) {
    if (type == "corporate")
        return (
            <>
                <div>
                    <CorporateImageView >
                        <Link href="/">
                            <Logo src={require("../../assets/images/logo/taxiye.svg")} />
                        </Link>
                        <Text>For managing your corporate travel.</Text>
                    </CorporateImageView>
                </div>


            </>
        )

    else if (type == "driver")
        return (
            <>
                <div>
                    <DriverImageView >
                        <Link href="/">
                            <Logo src={require("../../assets/images/logo/taxiye.svg")} />
                        </Link>
                        <Text>Always Moving!</Text>
                    </DriverImageView>
                </div>


            </>
        )
    return (
        <>
            <div>
                <ImageView >
                    <Link href="/">
                        <Logo src={require("../../assets/images/logo/taxiye.svg")} />
                    </Link>
                    <Text>Always Moving!</Text>
                </ImageView>
            </div>


        </>
    )
}




export default Image
