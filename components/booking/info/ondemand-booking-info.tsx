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

const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #979797;
`;

const Container = styled("div")`

display:flex;
gap:10px;
flex-direction:row;
`;

const VerticalContainer = styled("div")`
display:flex;
flex-direction:column;
justify-content:space-between;
gap:5px;
width:inherit;
`;


const MainTitle = styled(Title)`
padding-bottom:20px;
padding-top:10px;
`;

const BookingInfo = ({ title }:any) => {
    const origin = useSelector((state) => state["booking"]["origin"]);
    const destination = useSelector((state) => state["booking"]["destination"]);
    const date = useSelector((state) => state["booking"]["date"]);
    const time = useSelector((state) => state["booking"]["time"]);
    return (
        <>
            {title && <MainTitle>{title}</MainTitle>}
            <Container>
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