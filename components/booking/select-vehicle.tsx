import React, { useState } from 'react';
import styled from "styled-components";
import styles from "../../theme/global/vehicle-selection";
import { useSelector } from "react-redux";
import { Loading } from "../loading/loading";
import { selectVehicle } from "../../redux/actions/booking";

import store from '../../redux/store';

const Container = styled("div")`
padding:15px;
`;

const NormalContainer = styled("div")`
padding-left:20px;
`;

const FlexContainer = styled("div")`
display:flex;
padding:10px 20px;

`;

const CarFlexContainer = styled(FlexContainer)`
width: 50%;
`;


const CustomFlexContainer = styled(FlexContainer)`

padding:0px 0px;
padding:5px 0px;

`;

const CardContainer = styled("a")`
margin-bottom:10px;
background: #FFFFFF;
border: 1px solid #CCC;
box-sizing: border-box;
border-radius: 5px;
justify-content:space-between;
display:flex;
cursor:pointer;
text-decoration:none;
`;

const Text = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #444444;
`;

const PriceText = styled(Text)`
margin:auto;
`;

const Title = styled(Text)`
font-weight: bold;
padding-bottom:20px;

`;
const Message = styled(Text)`
font-weight: bold;
padding:20px 0px;
text-align:center;
`;

const Image = styled("img")`

`;


const VehicleList = () => {


    const loading = useSelector((state) => state["booking"]["fetchVehiclesLoading"]);
    const vehicleList = useSelector((state) => state["booking"]["vehicles"]);
    const isValid = useSelector((state) => state["booking"]["isValid"]);
    const [isSelected, setSelected] = useState(0);
    const userData = useSelector((state) => state["user"]["userData"]);

    return (
        <>
            {
                loading ?
                    <Loading /> : null}
            {
                vehicleList.length <= 0 ? <Message>No Vehicles</Message> : <Container>
                    <Title>Select Vehicle</Title>

                    {vehicleList.map((vehicle, index) => (
                        <CardContainer
                            onClick={() => {
                                store.dispatch(selectVehicle(vehicle));
                            }}
                            className={isValid ? "" : "disabled"} onMouseOver={() => { setSelected(index) }} id={isSelected == index ? "vehicleSelected" : null} key={vehicle.name}>
                            <style jsx global>
                                {styles}
                            </style>
                            <CarFlexContainer>
                                <Image src={require("../../assets/images/cars/vehicles/economy.svg")} />
                                <NormalContainer>
                                    <Text>{vehicle.region_name}</Text>
                                    <CustomFlexContainer>
                                        <Image src={require("../../assets/icons/avatar.svg")} />
                                        <Text>4</Text>
                                    </CustomFlexContainer>
                                </NormalContainer>

                            </CarFlexContainer>

                            <FlexContainer>
                                <PriceText>122 Birr</PriceText>
                            </FlexContainer>
                            <FlexContainer>
                                <Image src={require("../../assets/icons/right-arrow.svg")} />
                            </FlexContainer>
                        </CardContainer>
                    ))}
                </Container>
            }

        </>
    );
}

export default VehicleList;