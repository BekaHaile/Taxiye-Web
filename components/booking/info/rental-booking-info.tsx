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

const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: ${theme.colors.secondaryTextColor};
`;

const Container = styled("div")`
display:flex;
gap:10px;
flex-direction:row;
`;
const TopContainer = styled(Container)`
justify-content:space-between;
`;
const Wrapper = styled("div")`
display:flex;
gap:20px;
flex-direction:column;
`;
const Icon = styled("img")`
  height:fit-content;
  margin-top: 6px;
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

const BookingInfo = ({title}:any) => {
    const origin = useSelector((state) => state["booking"]["origin"]);
    const date = useSelector((state) => state["booking"]["date"]);
    const time = useSelector((state) => state["booking"]["time"]);
    return (
        <>
            {title && <MainTitle>{title}</MainTitle>}
            <Wrapper>
                <TopContainer>
                    <Container>
                        <Icon src={require("../../../assets/icons/location.svg")} />
                        <VerticalContainer>
                            <Title>Pick up</Title>
                            <Text>{origin.address}</Text>
                        </VerticalContainer>
                    </Container>
                    <Container>
                        <Icon src={require("../../../assets/icons/user/clock.svg")} />
                        <VerticalContainer>
                            <Title>Time</Title>
                            <Text>
                                <DateView date={date} format="MMM DD, YYYY" />
                                {` ${time}`}
                            </Text>
                        </VerticalContainer>
                    </Container>
                </TopContainer>

                <Container>
                    <Icon src={require("../../../assets/icons/package.svg")} />
                    <VerticalContainer>
                        <Title>Package</Title>
                        <Text>2 hrs 20 km</Text>
                    </VerticalContainer>
                </Container>
            </Wrapper>
        </>
    );
}

export default BookingInfo;




