import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import Rating from "../../../form/rating";

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 25px;
color: #444444;
`;
const MainTitle = styled(Title)`
padding-bottom:20px;
padding-top:10px;
text-align:center;
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color: #444444;
`;

const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #979797;
`;

const SubTitle = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
color: #444444;
justify-content: center;

`;
const Container = styled("div")`
display:flex;
gap:20px;
flex-direction:row;
justify-content:space-between;
`;

const VerticalContainer = styled("div")`
display:flex;
flex-direction:column;
gap:7px;
width:inherit;
align-self: center;
text-align:center;
`;
const ProfileImage = styled("img")`
width:70px;
height:70px;
border-radius:50%;

`;

const DriverInfo = () => {
    const driver = useSelector((state) => state["booking"]["driver"]);

    return (
        <>
            <MainTitle>Arriving in {driver.arrivingIn}</MainTitle>
            <Container>
                <Container>
                    <VerticalContainer>
                        <ProfileImage src={driver.profile} />
                    </VerticalContainer>
                    <VerticalContainer>
                        <Title>{`${driver.firstName} ${driver.lastName}`}</Title>
                        <SubTitle>{driver.phoneNumber}</SubTitle>
                        <SubTitle>
                        <Rating rate={driver.rating}/>
                        </SubTitle>
                    </VerticalContainer>
                </Container>
                <VerticalContainer>
                    <SubTitle>{driver.vehicleName}</SubTitle>
                    <Title>{driver.plateNumber}</Title>
                </VerticalContainer>

            </Container>
        </>
    );
}

export default DriverInfo;