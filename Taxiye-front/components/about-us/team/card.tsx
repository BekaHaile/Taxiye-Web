import React from 'react';
import styled from 'styled-components';

const Card = styled('div')`

align-items: center;
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
width: 300px;
max-width: 300px;
height: 310px;
`;

const CardWrapper = styled('div')`
display: flex;
justify-content: space-between;



`;

const CardTitle = styled('h3')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-align: center;
color: #444444;
text-align: center;
`;

const CardContent = styled('p')`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
text-align: center;
color: #444444;
padding-top:10px;
`;

const SecondaryCardContent = styled('p')`
font-size: 16px;
text-align: center;
padding-top:10px;
`;

const Image = styled('img')`
width: 300px;
height: 200px;
filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
border-radius: 10px;
margin: 0px 10px;
filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
`;

const SecondaryImage = styled(Image)`
    width: 200px;
    height:200px;
    margin: 0px 10px;
    border-radius: 50%;
    filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
    
`;

const SecondaryCard = styled(Card)`

width: 200px;

`;

const Container = styled("div")`
padding-top:20px;

`;

const TeamCard = ({ content }) => {
    return (
        <CardWrapper>
            <Card>
                <Image src={`${process.env.NEXT_PUBLIC_HOST}${content.image.url}`} />
                <Container>
                <CardTitle>{content.team}</CardTitle>
                <CardContent>{content.description}</CardContent>
                </Container>
            </Card>

        </CardWrapper>
    );
}

const SecondaryTeamCard = ({ content }) => {
    return (
        <CardWrapper>
            <SecondaryCard>
                <SecondaryImage src={`${process.env.NEXT_PUBLIC_HOST}${content.profile.url}`} />
                <Container>
                <CardTitle>{content.name}</CardTitle>
                <SecondaryCardContent>{content.title}</SecondaryCardContent>
                </Container>
            </SecondaryCard>

        </CardWrapper>
    );
}

export { TeamCard, SecondaryTeamCard };
