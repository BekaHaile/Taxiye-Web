import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import Rating from "../../form/rating";
import theme from '../../../theme/main';

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 25px;
color:${theme.colors.primaryTextColor};;
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
color:${theme.colors.primaryTextColor};;
`;

const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: ${theme.colors.secondaryTextColor};
`;

const SubTitle = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
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
            <MainTitle>Driver is on his way!</MainTitle>
            <Container>
                <Container>
                    <VerticalContainer>
                        <ProfileImage src={driver.user_image} />
                    </VerticalContainer>
                    <VerticalContainer>
                        <Title>{`${driver.user_name}`}</Title>
                        <SubTitle>{driver.phone_no}</SubTitle>
                        <SubTitle>
                        <Rating rate={driver.rating}/>
                        </SubTitle>
                    </VerticalContainer>
                </Container>
                <VerticalContainer>
                    <SubTitle>{driver.vehicle_name?driver.vehicle_name:""}</SubTitle>
                    <Title>{driver.driver_car_no}</Title>
                </VerticalContainer>

            </Container>


        </>
    );
}

export default DriverInfo;