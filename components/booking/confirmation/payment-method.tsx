import React, { useState } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { changePayemntMethod } from "../../../redux/actions/booking";
import store from "../../../redux/store";
import { Loader } from '../../loading/loading';

const FlexContainer = styled("div")`
display:flex;
gap:20px;
`;
const Method = styled("div")`
padding: 10px 20px;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
cursor:pointer;
`;

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color: #444444;
padding-bottom:20px;
`;

const PaymentMethod = () => {
    const payment_methods = useSelector((state) => state["booking"]["payment_methods"]);
    const paymentMethod = useSelector((state) => state["booking"]["paymentMethod"]);
    const paymentMethodLoading = useSelector((state) => state["booking"]["paymentMethodLoading"]);

    return (
        <>
            {payment_methods && <Title>Payment Method</Title>}
            <FlexContainer>
                {
                    paymentMethodLoading ?
                        <Loader /> :
                        payment_methods!=null? payment_methods.map((list, key) =>
                            <Method key={key} onClick={() => store.dispatch(changePayemntMethod(list.name))} className={paymentMethod == list.name ? "activeCard" : ""}>{list.name}</Method>
                           
                        ):null
                }

            </FlexContainer>

        </>
    );
}

export default PaymentMethod;