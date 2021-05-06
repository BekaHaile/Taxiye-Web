import React from 'react';
import styled from 'styled-components';

const Card = styled('div')`

align-items: center;
padding: 0px 20px;
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 30px;
width: 300px;
max-width: 300px;
height: 310px;
`;

const CardWrapper = styled('div')`
display: flex;
justify-content: space-around;

`;

const CardTitle = styled('h3')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-align: center;
color: #444444;
margin: 20px 0px 10px 0px;
text-align: center;
`;

const CardContent = styled('p')`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
text-align: center;
color: #444444;
margin: 0px 0px;
`;

const SecondaryCardContent = styled('p')`
font-size: 16px;
text-align: center;
margin: 0px 0px;
`;

const Image = styled('img')`
width: 300px;
height: 200px;
filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
border-radius: 10px;
margin: 0px 0px;
`;

const SecondaryImage = styled(Image)`
    width: 200px;
    height:200px;
    margin: 0px 0px;
    border-radius: 50%;
`;

const SecondaryCard = styled(Card)`

width: 200px;

`;

const TeamCard = ({ content }) => {
    return (
        <CardWrapper>
            <Card>
                <Image src={content.img} />
                <CardTitle>{content.title}</CardTitle>
                <CardContent>{content.content}</CardContent>
            </Card>

        </CardWrapper>
    );
}

const SecondaryTeamCard = ({ content }) => {
    return (
        <CardWrapper>
            <SecondaryCard>
                <SecondaryImage src={content.img} />
                <CardTitle>{content.title}</CardTitle>
                <SecondaryCardContent>{content.content}</SecondaryCardContent>
            </SecondaryCard>

        </CardWrapper>
    );
}

export { TeamCard, SecondaryTeamCard };
