import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import DateView from "../../form/Date";
import theme from '../../../theme/main';

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
`;
const MainTitle = styled(Title)`
padding-bottom:20px;
padding-top:10px;
`;

const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: ${theme.colors.secondaryTextColor};
`;

const HorizontalContainer = styled("div")`
display:flex;
flex-direction:row;
justify-content:space-between;
gap:5px;

`;
const Container = styled("div")`
display:flex;
gap:10px;
flex-direction:row;
`;

const Logo = styled("img")`
width:10px;
height:20px;

`;
const Stick = styled("div")`
    align-self: center;
    height: 100%;
    width: 2px;
    width: 2px;
    background-color: ${theme.colors.primary};
    position: absolute;
    height: 26px;
    left: 24px;
    margin-top: 17px;
`;


const VerticalContainer = styled("div")`
display:flex;
flex-direction:column;
justify-content:space-between;
gap:5px;
width:inherit;

`;

const VerticalContainerPadding = styled(VerticalContainer)`
padding-top:20px;;

`;

const LogoContainer = styled("div")`
display:flex;
flex-direction:column;
justify-content:start;
gap:2px;
width:inherit;


`;

const BookingInfo = () => {
    const origin = useSelector((state) => state["booking"]["origin"]);
    const destination = useSelector((state) => state["booking"]["destination"]);
    const date = useSelector((state) => state["booking"]["date"]);
    const time = useSelector((state) => state["booking"]["time"]);
    return (
        <>
            <MainTitle>Delivery Detail</MainTitle>
            <Container>

                <Container>

                    <VerticalContainer>

                        <VerticalContainer>
                            <Container>
                                <Logo src={require("../../../assets/icons/avatar.svg")} />
                                <div>
                                    <Title>{origin.address.split(",")[0]}</Title>
                                    <Text>{origin.address}</Text>
                                </div>
                            </Container>
                        </VerticalContainer>
                        <Stick/>
                        <VerticalContainer>
                            <Container>
                                <Logo src={require("../../../assets/icons/avatar.svg")} />
                                <div>
                                    <Title>{destination.address.split(",")[0]}</Title>
                                    <Text>{destination.address}</Text>
                                </div>
                            </Container>
                        </VerticalContainer>
                    </VerticalContainer>
                </Container>

                <VerticalContainer>
                    <VerticalContainer>
                        <Title>Pick up</Title>

                        <Text>
                            <DateView date={date} format="MMM DD, YYYY" />
                            {` ${time}`}

                        </Text>
                    </VerticalContainer>
                    <VerticalContainer>
                        <Title>Drop off</Title>
                        <Text>
                            <DateView date={date} format="MMM DD, YYYY" />


                        </Text>
                    </VerticalContainer>
                </VerticalContainer>
            </Container>


        </>
    );
}

export default BookingInfo;