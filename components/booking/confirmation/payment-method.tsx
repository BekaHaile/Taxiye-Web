import React, { useState } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { changePayemntMethod } from "../../../redux/actions/booking";
import store from "../../../redux/store";

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
    const lists = ["Cash", "ElSabi"];
    const paymentMethod = useSelector((state) => state["booking"]["paymentMethod"]);
    return (
        <>
            <Title>Payment Method</Title>
            <FlexContainer>
                {
                    lists.map((list, key) =>
                        <Method key={key} onClick={() => store.dispatch(changePayemntMethod(list))} className={paymentMethod == list ? "activeCard" : ""}>{list}</Method>
                    )
                }

            </FlexContainer>

        </>
    );
}

export default PaymentMethod;