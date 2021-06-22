import React, { Children, useState } from "react";
import styled from "styled-components";

const ModalView = styled("div")`
display: block;
position: fixed; 
z-index: 1;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.2);
position:absolute;
`;

const ModalContent = styled("div")`
    background-color: #fefefe;
    padding: 15px;
    width:400px;
    position:absolute;
    display: block;
    left:50%;
    top:50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius:5px;
`;

const ContentContainer = styled("div")`
    margin-top:20px;
    text-align:center;
    justify-content:center;
`;
const CloseModalContainer = styled("div")`

    text-align:end;
`;

const CloseModal = styled("span")`
    width:24px;
    height:24px;
    text-align: center;
    right: 0px;
    font-size: 24px;
    font-weight: bold;
    && {
        :focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;  
        }
        :hover {
            color: #000;
            text-decoration: none;
            cursor: pointer;  
        }
`;


const Modal = props => {
    
    if(!props.show)
    return null;
    return (
        <>
            <ModalView>
                <ModalContent >
                    <CloseModalContainer>
                    <CloseModal onClick={() =>props.onClose() }>&times;</CloseModal>
                    </CloseModalContainer>
                    <ContentContainer>
                    {props.children}
                    </ContentContainer>
                </ModalContent>
            </ModalView>
        </>
    );
};

export default Modal;
