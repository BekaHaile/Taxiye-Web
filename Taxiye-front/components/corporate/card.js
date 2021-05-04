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
margin: 0px 50px;
width: 270px;
height: 310px;
`;

const CardWrapper = styled('div')`
display: flex;
justify-content: space-around;
margin: 50px 0px;
`;

const CardTitle = styled('h3')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-align: center;
color: #444444;
margin: 20px 0px;
text-align: center;
`;

const CardContent = styled('p')`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #444444;
margin: 20px 0px;
`;

const Image = styled('img')`
width: 50%;
`;

const ExpenseCards = () => {
    return(
        <CardWrapper>
            <Card>
                <Image src={require("../../assets/icons/corporate-1.png")} />
                <CardTitle>Greater Control</CardTitle>
                <CardContent>Set your own trip terms, create cost centers, and control budget allocation.</CardContent>
            </Card>
            <Card>
                <Image src={require("../../assets/icons/corporate-2.png")} />
                <CardTitle>Hassle free accounting</CardTitle>
                <CardContent>Get rid of the hassle of collecting travel receipts and managing reimbursements.</CardContent>
            </Card>
            <Card>
                <Image src={require("../../assets/icons/corporate-3.png")} />
                <CardTitle>Effortless booking</CardTitle>
                <CardContent>Empower your employees to book their own trips with the tap of a button.</CardContent>
            </Card>
        </CardWrapper>
    );
}

export default ExpenseCards;