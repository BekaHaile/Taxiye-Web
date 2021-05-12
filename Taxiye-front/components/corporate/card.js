import React from 'react';
import styled from 'styled-components';

const Card = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 35px 20px;
background: #FFFFFF;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
width: 270px;
height: 310px;
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
`;

const TitleContainer = styled('div')`
    padding-top:30px;
`;

const Image = styled('img')`

`;

const ExpenseCards = () => {
    return(
        <CardWrapper>
            <Card>
                <Image src={require("../../assets/images/corporate/expenses/greater-control.svg")} />
                <TitleContainer>
                <CardTitle>Greater Control</CardTitle>
                <CardContent>Set your own trip terms, create cost centers, and control budget allocation.</CardContent>
                </TitleContainer>
            </Card>
            <CenteredCard>
                <Image src={require("../../assets/images/corporate/expenses/free-accounts.svg")} />
                <TitleContainer>
                <CardTitle>Hassle free accounting</CardTitle>
                <CardContent>Get rid of the hassle of collecting travel receipts and managing reimbursements.</CardContent>
                </TitleContainer>
            </CenteredCard>
            <Card>
                <Image src={require("../../assets/images/corporate/expenses/booking.svg")} />
                <TitleContainer>
                <CardTitle>Effortless booking</CardTitle>
                <CardContent>Empower your employees to book their own trips with the tap of a button.</CardContent>
                </TitleContainer>
            </Card>
        </CardWrapper>
    );
}

export default ExpenseCards;