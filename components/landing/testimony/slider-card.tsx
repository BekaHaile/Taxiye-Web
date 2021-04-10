import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Rating from './rating';

const Card = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 40px;
background: #FFFFFF;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`;

const Avatar = styled(Image)`
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

const SliderCard = () => {
    return (
        <Card>
            {/* <Avatar width="auto" height="auto" src={require("../../../assets/images/testi_image.png")} /> */}
            <CardTitle>Courtney Henry</CardTitle>
            <CardSubTitle>CEO, Jorka Events.</CardSubTitle>
            <CardText>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. </CardText>
            {/* <Rating /> */}
        </Card>
    );
}

export default SliderCard;