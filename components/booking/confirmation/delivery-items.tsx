import React, { useState } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { removeDeliveryItemImages } from "../../../redux/actions/booking";
import store from "../../../redux/store";

const FlexContainer = styled("div")`
display:flex;
gap:20px;
overflow:auto;
padding:5px 0px;
`;
const Image = styled("img")`
box-sizing: border-box;
border-radius: 5px;
cursor:pointer;
height:60px;
width:60px;
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
const CloseButton = styled("div")`
width: 12px;
height: 12px;
background-color: #bbb;
border-radius: 50%;
position:absolute;
display: inline-block;
text-align:center;
right:-5px;
top:-5px;
background: #A02167;
color:#fff;
font-weight:bold;
font-size:8px;

`;
const Container = styled("div")`
position:relative;
`;


const DeliveryItems = () => {
    const images = useSelector((state) => state["booking"]["delivery"]["images"]);
    const deliveryItems = useSelector((state) => state["booking"]["deliveryItems"]);
    const comment = useSelector((state) => state["booking"]["delivery"]["comment"]);
    return (
        <>
            <Title>{comment}</Title>
            <FlexContainer>
                {
                    images.map((list, key) =>
                        <Container>
                            <Image src={URL.createObjectURL(new Blob(list))} key={key} />
                            <CloseButton onClick={() => { store.dispatch(removeDeliveryItemImages(key));}}> x </CloseButton>
                        </Container>
                    )
                }

            </FlexContainer>

        </>
    );
}

export default DeliveryItems;