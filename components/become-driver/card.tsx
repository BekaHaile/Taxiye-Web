import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/main';


const Card = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 20px;
background: #FFFFFF;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 30px;
width: 270px;
max-width: 270px;
height: 310px;
`;

const CardWrapper = styled('div')`
display: flex;
justify-content: space-around;
margin: 0px 0px 50px 0px;
`;

const CardTitle = styled('h3')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-align: center;
color:${theme.colors.primaryTextColor};;
margin: 20px 0px;
text-align: center;
`;

const CardContent = styled('p')`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
color:${theme.colors.primaryTextColor};;
margin: 20px 0px;
`;

const Image = styled('img')`
width: 60px;
`;

const VisionCards = ({content}) => {
    return(
        <CardWrapper>
            <Card>
                <img src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`}/>
                <CardTitle>{content.title}</CardTitle>
                <CardContent>{content.description}</CardContent>
            </Card>
           
        </CardWrapper>
    );
}

export default VisionCards;
