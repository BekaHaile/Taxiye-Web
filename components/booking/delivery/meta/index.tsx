import React from 'react';
import styled from "styled-components";
import { Button, SecondaryButton, PrimaryButton } from "../../../form/buttons/primary-button";
import DriverInfo from "./driver-info";
import DeliveryInfo from "../../info/delivery-booking-info";
import HouseNumber from "./house-number";
import Landmark from "./land-mark";
import Note from "./note";
import { useSelector } from "react-redux";
import { useState } from 'react';
import store from '../../../../redux/store';

const Container = styled("div")`
width: -webkit-fill-available;
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
const ModalButtonContainer = styled("div")`
    display:flex;
    justify-content: flex-end;
    padding-top: 30px;
    gap:20px;
`;

const CustomButton = styled(Button)`
    padding: 5px 20px; 
    width:100%;  
`;
const CustomButtonContainer = styled("div")`
    padding: 0px 20px; 
   
`;

const MainContainer = styled("div")`
background: #ffffff;
border-radius: 5px;
display:flex;
flex-direction:column;
height: -webkit-fill-available;
width: -webkit-fill-available;
max-width:490px;
justify-content:space-between;
`;
const ModalTitle = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: center;
`;
const ModalSubTitle = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
text-align: center;
padding:20px 0px 40px 0px;
`;

const Icon = styled("img")`
display:flex;
flex-direction:row;
width:30px;
height:30px;

`;



const Meta = () => {
    const driverLoading = useSelector((state) => state["booking"]["driverLoading"]);

    const isAddressValid = useSelector((state) => state["booking"]["isAddressValid"]);

    return (
        <>
            <MainContainer>
                <Container>
                    {!driverLoading &&
                        <ContentContainer>
                            <DriverInfo />
                        </ContentContainer>
                    }
                </Container>
                <Container>

                    <ContentContainer>
                        <DeliveryInfo />
                    </ContentContainer>
                    <ContentContainer>
                        <HouseNumber />
                    </ContentContainer>
                    <ContentContainer>
                        <Landmark />
                    </ContentContainer>
                    <ContentContainer>
                        <Note />
                    </ContentContainer>

                </Container>
                <ButtonContainer>
                    <CustomButtonContainer>
                        <CustomButton disabled={!isAddressValid}>Continue</CustomButton>
                    </CustomButtonContainer>

                </ButtonContainer>
            </MainContainer>

        </>
    );
}


export default Meta;