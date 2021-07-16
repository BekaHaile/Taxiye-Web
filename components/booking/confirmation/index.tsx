import React from 'react';
import styled from "styled-components";
import { Button } from "../../form/buttons/primary-button";
import PaymentMethod from "./payment-method";
import DeliveryItems from "./delivery-items";
import CouponCode from "./coupon-code";
import Note from "./note";
import Header from "./header";
import OnDemandBookingInfo from "../info/ondemand-booking-info";
import RentalBookingInfo from "../info/rental-booking-info";
import OutStationBookingInfo from "../info/outstation-booking-info";
import DeliveryBookingInfo from "../info/delivery-booking-info";
import { confirmRequest } from "../../../redux/actions/booking";
import store from "../../../redux/store";
import { useSelector } from 'react-redux';
import theme from '../../../theme/main';

const Container = styled("div")`
width: -webkit-fill-available;
overflow-y:scroll;
`;
const HeaderContainer = styled("div")`
background: ${theme.colors.white};
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
background: ${theme.colors.white};
border-radius: 5px;
display:flex;
flex-direction:column;
height: -webkit-fill-available;
width: -webkit-fill-available;
max-width:490px;
justify-content:space-between;
`;
const ContainerWithNoBorder = styled(ContentContainer)`
border-bottom: none;
`;

const Confirm = (content) => {
    const type = useSelector((state) => state["booking"]["type"]);
    return (
        <>
            <MainContainer>
                
                <Container>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
                    {
                        type == "delivery" ? <ContentContainer>
                            <DeliveryItems />
                        </ContentContainer> : null
                    }
                    <ContentContainer>
                        {type == "on-demand" ?
                            <OnDemandBookingInfo /> :
                            type == "rental" ?
                                <RentalBookingInfo /> :
                                type == "out-station" ?
                                    <OutStationBookingInfo /> :
                                    type == "delivery" ?
                                        <DeliveryBookingInfo /> :
                                        null
                        }
                    </ContentContainer>
                    <ContentContainer>
                        <PaymentMethod />
                    </ContentContainer>
                    <ContentContainer>
                        <CouponCode />
                    </ContentContainer>
                    <ContainerWithNoBorder>
                        <Note />

                    </ContainerWithNoBorder>
                </Container>
                <ButtonContainer>
                    <CustomButton onClick={() => store.dispatch(confirmRequest())}>Confirm and request</CustomButton>
                </ButtonContainer>
            </MainContainer>

        </>
    );
}

export default Confirm;