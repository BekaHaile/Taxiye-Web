import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {useSelector} from "react-redux";

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
`;
const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 400;
font-size: 12px;
padding-top:5px;
line-height: 16px;
color: #979797;
`;
const Container = styled("div")`
display:flex;
padding: 10px 20px;
gap:40px;
align-items:center;
`;

const HorizontalFlex = styled("div")`
display:flex;
flex-direction:row;
gap:20px;
align-items:center;
`;
const VerticalFlex = styled("div")`
display:flex;
flex-direction:column;
`;

const BackButton = styled("img")`
    height:30px;
`;
const Image = styled("img")`
    height:20px;
    width:50px;
`;
const Note = () => {
    const data = {
        type: "Family",
        car: require("../../../assets/images/cars/car_mini.svg"),
        distance: "6 Min away",
        cost: "178 Birr"

    }
    const vehicle = useSelector((state) => state["booking"]["vehicle"]);
    return (
        <>
            <Container>
                <Link href="/">
                <BackButton src={require("../../../assets/icons/back-arrow.svg")} />
                </Link>
                <HorizontalFlex>
                    <Image src={data.car} />
                    <VerticalFlex>
                        <Title>{vehicle.region_name}</Title>
                        <HorizontalFlex>
                            <Text>{data.distance}</Text>
                            <Text>{` ~ ${data.cost}`}</Text>
                        </HorizontalFlex>
                    </VerticalFlex>

                </HorizontalFlex>
            </Container>

        </>
    );
}

export default Note;