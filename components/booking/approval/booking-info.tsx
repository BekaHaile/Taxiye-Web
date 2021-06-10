import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import DateView from "../../form/Date";

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color: #444444;
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
color: #979797;
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

const Logo = styled("div")`
display: block;
background-image:url(${require("../../../assets/icons/avatar.svg")});
background-repeat: no-repeat;
background-size: 30px 30px;
width:20px;
height:30px;
&:after {
    content: "";
    height: 100px;
    width: 2px;
    background-color: #A02167;
    position: absolute;
    bottom: -.5em;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const VerticalContainer = styled("div")`
display:flex;
flex-direction:column;
justify-content:space-between;
gap:5px;
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
                        <Logo/>
                        <Logo />
                    </VerticalContainer>
                    <VerticalContainer>

                        <VerticalContainer>
                            <Title>{origin.address.split(",")[0]}</Title>
                            <Text>{origin.address}</Text>
                        </VerticalContainer>

                        <VerticalContainer>
                            <Title>{destination.address.split(",")[0]}</Title>
                            <Text>{destination.address}</Text>
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