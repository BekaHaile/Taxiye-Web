import React, { useState } from 'react';
import styled from "styled-components";
import styles from "../../../theme/global/vehicle-selection";
import { useSelector } from "react-redux";
import { Loading } from "../../loading/loading";
import { selectVehicle } from "../../../redux/actions/booking";

import store from '../../../redux/store';
const Container = styled("div")`
padding:15px;
`;

const NormalContainer = styled("div")`
text-align:center;
`;

const FlexContainer = styled("div")`
display:flex;
justify-content:space-around;
flex-direction:row;


`;
const CarWraperContainer = styled(FlexContainer)`
flex-wrap:wrap;
column-gap: 40px;
`;

const CarFlexContainer = styled(FlexContainer)`
gap:20px;

`;



const CardContainer = styled("div")`
margin-bottom:10px;
background: #FFFFFF;
border: 1px solid #CCC;
box-sizing: border-box;
border-radius: 5px;
justify-content:space-between;
display:flex;
cursor:pointer;
padding:10px 20px;
min-width: 200px;

`;

const Text = styled("p")`

font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
/* identical to box height */


/* Black / 444 */

color: #444444;

`;

const PriceText = styled(Text)`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;

/* Black / 444 */

color: #444444;
padding-top:5px;
`;

const Title = styled(Text)`
font-weight: bold;
padding-bottom:20px;

`;

const Image = styled("img")`

`;


const vehicles = [{
    imageUrl: require("../../../assets/icons/bike-delivery.svg"),
    name: "Bike Delivery",
    capacity: "4",
    price: "122",
    currency: "Birr",
},
{
    imageUrl: require("../../../assets/images/cars/vehicles/economy.svg"),
    name: "Taxi Delivery",
    capacity: "4",
    price: "122",
    currency: "Birr",
},

];

const Message = styled(Text)`
font-weight: bold;
padding:20px 0px;
text-align:center;
`;

const VehicleList = () => {

    const loading = useSelector((state) => state["booking"]["fetchVehiclesLoading"]);
    const vehicleList = useSelector((state) => state["booking"]["vehicles"]);
    const isValid = useSelector((state) => state["booking"]["isValid"]);
    const [isSelected, setSelected] = useState(0);

    return (
        <>
            {
                loading ?
                    <Loading /> : null}
            {
                vehicleList.length <= 0 ? <Message>No Vehicles</Message> :
                    <Container>
                        <Title>Select delivery type</Title>
                        <CarWraperContainer>
                            {vehicleList.map((vehicle, index) => (
                                <CardContainer onMouseOver={() => { setSelected(index) }} id={isSelected == index ? "vehicleSelected" : null} key={vehicle.name}>
                                    <style jsx global>
                                        {styles}
                                    </style>
                                    <CarFlexContainer>
                                        <Image src={require("../../../assets/images/cars/vehicles/economy.svg")} />
                                        <NormalContainer>
                                            <Text>{vehicle.region_name}</Text>

                                            <PriceText>~ 122 Birr</PriceText>
                                        </NormalContainer>

                                    </CarFlexContainer>

                                </CardContainer>
                            ))}
                        </CarWraperContainer>
                    </Container>
            }

        </>
    );
}

export default VehicleList;