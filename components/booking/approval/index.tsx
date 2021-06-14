import React from 'react';
import styled from "styled-components";
import { Button, SecondaryButton, PrimaryButton } from "../../form/buttons/primary-button";
import OnDemandBookingInfo from "../info/ondemand-booking-info";
import RentalBookingInfo from "../info/rental-booking-info";
import OutStationBookingInfo from "../info/outstation-booking-info";
import DeliveryBookingInfo from "../info/delivery-booking-info";
import DriverInfo from "./driver-info";
import Loading from "./loading";
import PaymentMethod from "./payment-method";
import { useSelector } from "react-redux";
import Modal from "../../modal/secondary";
import { useState } from 'react';
import store from '../../../redux/store';
import { submitTerminatioReason, cancelRequest } from "../../../redux/actions/booking";

const Container = styled("div")`
width: -webkit-fill-available;
`;
const FlexContainer = styled("div")`
display:flex;
gap:10px;
flex-direction:${props => props.direction ? props.direction : "row"};
text-align: center;

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

const ButtonContent = styled("div")`
display:flex;
flex-direction:row;
gap:20px;
`;

const Icon = styled("img")`
display:flex;
flex-direction:row;
width:30px;
height:30px;

`;
const CenteredIcon = styled(Icon)`
margin:auto;
display:block;
`;
const CustomPrimaryButton = styled(PrimaryButton)`
text-align: start;
&:hover{
border:1px solid #A02167;
}
`;
const Text = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
color:${props => props.color ? props.color : "#444444"} ;
align-self: center;
`;



const Approve = () => {
    const driver = useSelector((state) => state["booking"]["driver"]);
    const driverLoading = useSelector((state) => state["booking"]["driverLoading"]);
    const paymentMethod = useSelector((state) => state["booking"]["paymentMethod"]);
    const cancelRide = useSelector((state) => state["booking"]["cancelRide"]);
    const [exitModal, setExitModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);

    const type = useSelector((state) => state["booking"]["type"]);

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
                        {type == "on-demand" ?
                            <OnDemandBookingInfo title="Trip Detail" /> :
                            type == "rental" ?
                                <RentalBookingInfo title="Rental Detail" /> :
                                type == "out-station" ?
                                    <OutStationBookingInfo title="Trip Detail" /> :
                                    type == "delivery" ?
                                        <DeliveryBookingInfo title="Delivery Detail" /> :
                                        null
                        }
                    </ContentContainer>
                    {driverLoading ? <Loading /> : <PaymentMethod paymentMethod={paymentMethod} />}

                </Container>
                <ButtonContainer>
                    {driverLoading ?
                        <CustomButtonContainer>
                            <CustomButton onClick={() => setExitModal(true)}>Cancel Request</CustomButton>
                        </CustomButtonContainer>
                        :
                        <FlexContainer direction="column" onClick={() => setCancelModal(true)}>
                            <CenteredIcon src={require("../../../assets/icons/black-danger-icon.svg")} />
                            <Text> Cancel Ride</Text>
                        </FlexContainer>

                    }
                    {driverLoading ? ExitModalView(exitModal, setExitModal) :
                        driver &&
                            !cancelRide ? CancelModalView(cancelModal, setCancelModal, driver) :
                            CanceledModalView(cancelRide)
                    }
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
                                <RatingText >{driver.rating}</RatingText>
                            </Rating>
                        </RatingContainer>
                    </ProfileImage>
                    <ModalTitle>{driver.firstName} is already on his way.</ModalTitle>
                    <ModalTitle>Are you sure you want to cancel this request?</ModalTitle>
                    <ModalSubTitle>You may be charged a fee.</ModalSubTitle>
                </Container>
                <ButtonContainer>

                    <PrimaryButton>
                        <ButtonContent>
                            <Icon src={require("../../../assets/icons/phone-icon.svg")} />
                            <FlexContainer>
                                <Text >Call Driver</Text>
                                <Text>{driver.phoneNumber}</Text>
                            </FlexContainer>
                        </ButtonContent>
                    </PrimaryButton>

                    <PrimaryButton color="red" onClick={() => {
                        setCancelModal(false);
                        store.dispatch(cancelRequest());
                    }}>
                        <ButtonContent>
                            <Icon src={require("../../../assets/icons/danger-icon.svg")} />
                            <Text color="red">Cancel Ride</Text>
                        </ButtonContent>
                    </PrimaryButton>

                </ButtonContainer>
            </Modal>
        </>
    );
}

function CanceledModalView(cancelModal) {

    let reasons = [

        "Request was incorrect.",
        "Too expensive",
        "Driver is too far.",
        "Changed my mind.",
        "Other"

    ];
    return (
        <>
            <Modal onClose={() => store.dispatch(submitTerminatioReason("Other"))} showCloseIcon={false} show={cancelModal}>
                <Container>
                    <ModalTitle>The Ride has been successfully cancelled</ModalTitle>
                    <ModalSubTitle>to help us improve, tell us why.</ModalSubTitle>
                </Container>
                <ButtonContainer>
                    {reasons.map((title, key) =>
                        <CustomPrimaryButton onClick={() => store.dispatch(submitTerminatioReason(title))} key={key}>
                            <Text>
                                {title}
                            </Text>
                        </CustomPrimaryButton>
                    )
                    }
                </ButtonContainer>
            </Modal>
        </>
    );
}

export default Approve;