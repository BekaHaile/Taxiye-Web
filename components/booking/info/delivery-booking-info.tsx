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
text-overflow: ellipsis;
`;

const Container = styled("div")`

display:flex;
justify-content:space-between;
flex-direction:row;
`;

const VerticalContainer = styled("div")`
display:flex;
flex-direction:column;
gap:5px;
width:inherit;
min-width:120px;
`;

const MainVerticalContainer = styled(VerticalContainer)`
flex:auto;
gap:20px;
`;


const MainTitle = styled(Title)`
padding-bottom:20px;
padding-top:10px;
`;
const IconContainer = styled("div")`
display:flex;
flex-direction:column;
padding: 10px 10px 0px 0px;
align-items: center;
`;
const Icon = styled("img")`
display:flex;
flex-direction:column;
width:15px;
height:15px;
padding:3px 0px;
`;
const Border = styled("div")`
height:50px;
text-align:center;
border-left: 2px dotted #A02167;
`;


const BookingInfo = ({ title }: any) => {
    const origin = useSelector((state) => state["booking"]["origin"]);
    const destination = useSelector((state) => state["booking"]["destination"]);
    const date = useSelector((state) => state["booking"]["date"]);
    const time = useSelector((state) => state["booking"]["time"]);
    const house_number = useSelector((state) => state["booking"]["house_number"]);
    const landmark = useSelector((state) => state["booking"]["landmark"]);
    return (
        <>
            {title && <MainTitle>{title}</MainTitle>}
            <Container>
                <IconContainer>
                    <Icon src={require("../../../assets/icons/location-green.svg")}/>
                    <Border/>
                    <Icon src={require("../../../assets/icons/flag.svg")}/>
                </IconContainer>
                <MainVerticalContainer>

                    <Container>
                        <VerticalContainer>
                            <Title>{origin.address.split(",")[0]}</Title>
                            <Text>{origin.address}</Text>
                        </VerticalContainer>
                        <VerticalContainer>
                            <Title>Pick up</Title>

                            <Text>
                                <DateView date={date} format="MMM DD, YYYY" />
                                {` ${time}`}
                            </Text>
                        </VerticalContainer>

                    </Container>

                    <Container>

                        <VerticalContainer>
                            <Title>{destination.address.split(",")[0]}</Title>
                            <Text>{destination.address}</Text>
                            <Text>{house_number}</Text>
                            <Text>{landmark}</Text>
                        </VerticalContainer>
                        <VerticalContainer>
                            <Title>Drop off</Title>
                            <Text>
                                <DateView date={date} format="MMM DD, YYYY" />
                            </Text>
                        </VerticalContainer>
                    </Container>
                </MainVerticalContainer>
            </Container>

        </>
    );
}

export default BookingInfo;