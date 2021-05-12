import React from 'react';
import styled from 'styled-components';
import {VisionImage, MissionImage, ValueImage} from "./images";

const Card = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 35px 20px;
background: #FFFFFF;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
border-radius: 10px;

`;


const CardWrapper = styled('div')`
display: flex;
justify-content: space-around;
`;
const CenteredCard = styled(Card)`
margin:0px 50px;
box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.161);
`;

const CardTitle = styled('h3')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-align: center;
color: #444444;
padding-bottom: 20px;
text-align: center;
`;

const CardContent = styled('p')`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #444444;
width: 250px;
`;

const TitleContainer = styled('div')`
    padding-top:30px;
`;

const Image = styled('img')`

`;

const VisionCards = () => {
    return(
        <CardWrapper>
            <Card>
                <VisionImage />
                <TitleContainer>
                <CardTitle>Vision</CardTitle>
                <CardContent>To be the best ride hailing service provider in Africa which is uniquely owned by taxi drivers, major shareholders and the public.</CardContent>
                </TitleContainer>
            </Card>
            <CenteredCard>
                <MissionImage />
                <TitleContainer>
                <CardTitle>Mission</CardTitle>
                <CardContent>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra adipiscing conubia ligula.</CardContent>
                </TitleContainer>
            </CenteredCard>
            <Card>
                <ValueImage />
                <TitleContainer>
                <CardTitle>Value</CardTitle>
                <CardContent>To help passengers get better means of transportation at a reasonable price and to modernize the transportation system.</CardContent>
                </TitleContainer>
            </Card>
        </CardWrapper>
    );
}

export default VisionCards;