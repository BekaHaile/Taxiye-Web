import React from 'react';
import styled from "styled-components";
import theme from '../../../theme/main';

const Contianer = styled("div")`
display:flex;
justify-content:space-between;
padding:30px 30px;

`;
const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
`;
const SubTitle = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
`;

const PaymentMethod = ({ paymentMethod }) => {

    return (
        <>
            <Contianer>
                <Title>Payment Method</Title>
                <SubTitle>{paymentMethod}</SubTitle>
            </Contianer>

        </>
    );
}

export default PaymentMethod;