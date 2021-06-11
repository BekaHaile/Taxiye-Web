import React from 'react';
import styled from "styled-components";
import { Button, SecondaryButton } from "../../form/buttons/primary-button";
import BookingInfo from "./booking-info";
import DriverInfo from "./driver-info";
import Loading from "./loading";
import PaymentMethod from "./payment-method";
import { useSelector } from "react-redux";
import Modal from "../../modal/secondary";
import { useState } from 'react';

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
const CustomSecondaryButton = styled(Button)`
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
const ProfileImage = styled.div`
background-image: url(${props => props.src});
background-repeat: no-repeat;
background-size: cover;
width:100px;
height:100px;
border-radius:50%;
margin: auto;
display: block;
position:relative;

`;

const Rating = styled("div")`
border-top-left-radius:20px;
border-top-right-radius:20px;
margin:auto;
display:flex;
background:white;
padding: 5px 10px;
`;
const RatingText = styled("span")`
font-size: 14px;
align-self: center;
padding-left:5px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
`;


const RatingContainer = styled("div")`
justify-content:center;
display:flex;
position:absolute;
bottom:0;
width:100%;
`;

const Approve = () => {
    const driver = useSelector((state) => state["booking"]["driver"]);
    const driverLoading = useSelector((state) => state["booking"]["driverLoading"]);
    const paymentMethod = useSelector((state) => state["booking"]["paymentMethod"]);
    const [exitModal, setExitModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
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
                    {driverLoading ? <Loading /> : <PaymentMethod paymentMethod={paymentMethod} />}

                </Container>
                <ButtonContainer>
                    {driverLoading ?
                        <CustomButton onClick={() => setExitModal(true)}>Cancel Request</CustomButton> :
                        <CustomButton onClick={() => setCancelModal(true)}>Cancel Ride</CustomButton>
                    }
                    {driverLoading ? ExitModalView(exitModal, setExitModal) :
                        driver &&
                        CancelModalView(cancelModal, setCancelModal, driver)}
                </ButtonContainer>
            </MainContainer>

        </>
    );
}

function ExitModalView(exitModal, setExitModal) {

    return (
        <>
            <Modal showCloseIcon={false} show={exitModal}>
                <Container>
                    <ModalTitle>Are you sure you want to cancel this request?</ModalTitle>
                </Container>
                <ModalButtonContainer>
                    <SecondaryButton onClick={() => {
                        setExitModal(false);
                    }}>
                        Yes
                    </SecondaryButton>
                    <Button onClick={() => setExitModal(false)}>No</Button>
                </ModalButtonContainer>
            </Modal>
        </>
    );
}

function CancelModalView(cancelModal, setCancelModal, driver) {

    return (
        <>
            <Modal showCloseIcon={false} onClose={() => setCancelModal(false)} show={cancelModal}>
                <Container>
                    <ProfileImage src={driver.profile}>
                        <RatingContainer>
                            <Rating className="MuiRating-root">
                                <span className="MuiRating-icon MuiRating-iconFilled"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg></span>
                                <RatingText >5.0</RatingText>
                            </Rating>
                        </RatingContainer>
                    </ProfileImage>
                    <ModalTitle>{driver.firstName} is already on his way.</ModalTitle>
                    <ModalTitle>Are you sure you want to cancel this request?</ModalTitle>
                    <ModalSubTitle>You may be charged a fee.</ModalSubTitle>
                </Container>
                <ButtonContainer>
                    <CustomSecondaryButton onClick={() => setCancelModal(false)}>No</CustomSecondaryButton>
                </ButtonContainer>
                <ButtonContainer>
                    <CustomSecondaryButton onClick={() => setCancelModal(false)}>No</CustomSecondaryButton>
                </ButtonContainer>
            </Modal>
        </>
    );
}

export default Approve;