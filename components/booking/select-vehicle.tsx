import React, { useState } from 'react';
import styled from "styled-components";
import styles from "../../theme/global/vehicle-selection";

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

const CardContainer = styled("div")`
margin-bottom:10px;
background: #FFFFFF;
border: 1px solid #CCC;
box-sizing: border-box;
border-radius: 5px;
justify-content:space-between;
display:flex;
cursor:pointer;
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

const Image = styled("img")`

`;


const vehicles = [{
    imageUrl: require("../../assets/images/cars/vehicles/economy.svg"),
    name: "Economy",
    capacity: "4",
    price: "122",
    currency: "Birr",
},
{
    imageUrl: require("../../assets/images/cars/vehicles/economy.svg"),
    name: "Economy",
    capacity: "4",
    price: "122",
    currency: "Birr",
},
{
    imageUrl: require("../../assets/images/cars/vehicles/economy.svg"),
    name: "Economy",
    capacity: "4",
    price: "122",
    currency: "Birr",
},
{
    imageUrl: require("../../assets/images/cars/vehicles/economy.svg"),
    name: "Economy",
    capacity: "4",
    price: "122",
    currency: "Birr",
},
{
    imageUrl: require("../../assets/images/cars/vehicles/economy.svg"),
    name: "Economy",
    capacity: "4",
    price: "122",
    currency: "Birr",
}


];

const VehicleList = () => {

    const [isSelected, setSelected] = useState(0);

    return (
        <>
            <Container>
                <Title>Select Vehicle</Title>

                {vehicles.map((vehicle, index) => (
                    <CardContainer onClick={()=>{setSelected(index)}} id={isSelected == index ? "vehicleSelected" : null} key={vehicle.name}>
                        <style jsx global>
                            {styles}
                        </style>
                        <CarFlexContainer>
                            <Image src={vehicle.imageUrl} />
                            <NormalContainer>
                                <Text>{vehicle.name}</Text>
                                <CustomFlexContainer>
                                    <Image src={require("../../assets/icons/avatar.svg")} />
                                    <Text>{vehicle.capacity}</Text>
                                </CustomFlexContainer>

                            </NormalContainer>

                        </CarFlexContainer>

                        <FlexContainer>
                            <PriceText>{vehicle.price + " " + vehicle.currency}</PriceText>
                        </FlexContainer>
                        <FlexContainer>
                            <Image src={require("../../assets/icons/right-arrow.svg")} />
                        </FlexContainer>


                    </CardContainer>
                ))}
            </Container>

        </>
    );
}

export default VehicleList;