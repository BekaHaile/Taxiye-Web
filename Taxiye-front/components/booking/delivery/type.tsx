import React, { useState } from 'react';
import styled from "styled-components";
import styles from "../../../theme/global/vehicle-selection";

const Container = styled("div")`
padding:15px;
`;

const NormalContainer = styled("div")`
text-align:center;
`;

const FlexContainer = styled("div")`
display:flex;
justify-content:space-between;
flex-direction:row;
gap: 40px;
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
width: -webkit-fill-available;

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

const VehicleList = () => {

    const [isSelected, setSelected] = useState(0);

    return (
        <>
            <Container>
                <Title>Select delivery type</Title>
                <FlexContainer>
                    {vehicles.map((vehicle, index) => (
                        <CardContainer onClick={() => { setSelected(index) }} id={isSelected == index ? "vehicleSelected" : null} key={vehicle.name}>
                            <style jsx global>
                                {styles}
                            </style>
                            <CarFlexContainer>
                                <Image src={vehicle.imageUrl} />
                                <NormalContainer>
                                    <Text>{vehicle.name}</Text>

                                    <PriceText>{"~ "+vehicle.price + " " + vehicle.currency}</PriceText>


                                </NormalContainer>

                            </CarFlexContainer>




                        </CardContainer>
                    ))}
                </FlexContainer>
            </Container>

        </>
    );
}

export default VehicleList;