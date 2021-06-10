import React from 'react';
import styled from "styled-components";
import { Button } from "../../form/buttons/primary-button";
import PaymentMethod from "./payment-method";
import CouponCode from "./coupon-code";
import Note from "./note";
import Header from "./header";
import BookingInfo from "./booking-info";
import { confirmRequest } from "../../../redux/actions/booking";
import store from "../../../redux/store";

const Container = styled("div")`
width: -webkit-fill-available;
`;
const HeaderContainer = styled("div")`
background: #FFFFFF;
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
`;

const ContentContainer = styled("div")`
    padding: 10px 20px;
    border-bottom: 5px solid #EFF2F5;
    width: -webkit-fill-available;
`;

const ButtonContainer = styled("div")`
    padding: 10px 20px;
    
`;


const CustomButton = styled(Button)`
    padding: 5px 20px; 
    width:100%;
    
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


const Confirm = (content) => {
    return (
        <>
            <MainContainer>
                <Container>
                    <HeaderContainer>
                        <Header />
                    </HeaderContainer>
                    
                    <ContentContainer>
                        <BookingInfo />
                    </ContentContainer>
                    <ContentContainer>
                        <PaymentMethod />
                    </ContentContainer>
                    <ContentContainer>
                        <CouponCode />
                    </ContentContainer>
                    <ContentContainer>
                        <Note />

                    </ContentContainer>
                </Container>
                <ButtonContainer>
                    <CustomButton onClick={()=>store.dispatch(confirmRequest())}>Confirm and request</CustomButton>
                </ButtonContainer>
            </MainContainer>

        </>
    );
}

export default Confirm;