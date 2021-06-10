import React from 'react';
import styled from "styled-components";
import { Button } from "../../form/buttons/primary-button";
import BookingInfo from "./booking-info";
import DriverInfo from "./driver-info";
import Loading from "./loading";
import PaymentMethod from "./payment-method";
import { useSelector } from "react-redux";

const Container = styled("div")`
width: -webkit-fill-available;
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


const Approve = () => {
    const driver = useSelector((state) => state["booking"]["driver"]);
    const driverLoading = useSelector((state) => state["booking"]["driverLoading"]);
    const paymentMethod = useSelector((state) => state["booking"]["paymentMethod"]);
    return (
        <>
            <MainContainer>
                <Container>
                    {!driverLoading &&
                        <ContentContainer>
                            <DriverInfo />
                        </ContentContainer>
                    }
                    <ContentContainer>
                        <BookingInfo />
                    </ContentContainer>
                    {driverLoading ? <Loading /> : <PaymentMethod paymentMethod={paymentMethod}/>}

                </Container>
                <ButtonContainer>
                    <CustomButton>Cancel Ride</CustomButton>
                </ButtonContainer>
            </MainContainer>

        </>
    );
}

export default Approve;