import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Rating from './rating';

const Card = styled('div')`

align-items: center;
background: #FFFFFF;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
height: 360.46px;
width: 580px;
left: 333px;
top: 0px;
border-radius: 10px;
padding: 30px 40px;

`;

const Avatar = styled(Image)`
height: 85px;
width: 85px;
left: 34px;
top: 0px;
border-radius: 0px;
position: static;
left: 22.22%;
right: 22.22%;
top: 0%;
bottom: 43.71%;
flex: none;
order: 0;
flex-grow: 0;
margin: 15px 0px;

`;

const CardTitle = styled('h3')`
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-align: center;
margin: 5px 0px;
`;

const CardSubTitle = styled('h5')`
font-size: 14px;
line-height: 19px;
text-align: center;
color: #444444;
margin: 5px 0px;
`;

const CardText = styled('p')`
font-size: 16px;
line-height: 22px;
text-align: center;
color: #444444;
`;

const TestimonyCard = ({testimony}) => {
    return (
        <Card>
            <Avatar width="85px" height="85px" src={testimony.image} />
            <CardTitle>{testimony.name}</CardTitle>
            <CardSubTitle>{testimony.title}</CardSubTitle>
            <CardText>{testimony.description}</CardText>
            <Rating key={testimony.name} rate={testimony.rate}  />
        </Card>
    );
}

export default TestimonyCard;