import React from 'react';
import styled from "styled-components";
import { Button, SecondaryButton, PrimaryButton } from "../../../form/buttons/primary-button";
import Header from "./header";
import DeliveryInfo from "../../info/delivery-booking-info";
import HouseNumber from "./house-number";
import Landmark from "./land-mark";
import Note from "./note";
import { useSelector } from "react-redux";
import { useState } from 'react';
import store from '../../../../redux/store';
import {selectDelivery } from "../../../../redux/actions/booking";

const Container = styled("div")`
width: -webkit-fill-available;
overflow:auto;
`;

const ContentContainer = styled("div")`
    padding: 10px 20px;
    border-bottom: 5px solid #EFF2F5;
    width: -webkit-fill-available;
`;

const ButtonContainer = styled("div")`
  display:flex;
  flex-direction:column;
  gap:10px;
`;
const ContainerWithNoBorder = styled(ContentContainer)`
border-bottom: none;
`;

const CustomButton = styled(Button)`
    padding: 5px 20px; 
    margin:20px 0px;
    width:100%;  
`;
const CustomButtonContainer = styled("div")`
    padding: 0px 20px; 
   
`;

const MainContainer = styled("div")`
background: ${theme.colors.white};;
border-radius: 5px;
display:flex;
flex-direction:column;
height: -webkit-fill-available;
width: -webkit-fill-available;
max-width:490px;
justify-content:space-between;

`;

const Icon = styled("img")`
display:flex;
flex-direction:row;
width:30px;
height:30px;

`;
const HeaderContainer = styled("div")`
background: ${theme.colors.white};;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
`;


const Meta = () => {
    const driverLoading = useSelector((state) => state["booking"]["driverLoading"]);

    const isAddressValid = useSelector((state) => state["booking"]["isAddressValid"]);

    return (
        <>
            <MainContainer>

                <Container>
                    <HeaderContainer>
                        <Header />
                    </HeaderContainer>
                    <ContentContainer>
                        <DeliveryInfo />
                    </ContentContainer>
                    <ContentContainer>
                        <HouseNumber />
                    </ContentContainer>
                    <ContentContainer>
                        <Landmark />
                    </ContentContainer>
                    <ContainerWithNoBorder>
                        <Note />
                    </ContainerWithNoBorder>

                </Container>
                <ButtonContainer>
                    <CustomButtonContainer>
                        <CustomButton onClick={() => store.dispatch(selectDelivery())} disabled={!isAddressValid}>Continue</CustomButton>
                    </CustomButtonContainer>

                </ButtonContainer>
            </MainContainer>

        </>
    );
}


export default Meta;