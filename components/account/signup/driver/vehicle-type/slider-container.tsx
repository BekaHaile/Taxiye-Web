import React, { useState } from 'react';
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import styles from "../../../../../theme/global/slider";
import Slider from "../../../../slider/";
import theme from '../../../../../theme/main';

const Card = styled("div")`
width:152px;
height:160px;
border: 1px solid${theme.colors.primaryTextColor};;
box-sizing: border-box;
border-radius: 5px;
justify-content:center;
position:relative;
text-align:center;
cursor: pointer;
`;

const CenteredElement = styled("div")`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled("img")`

`;

const Title = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
color:${theme.colors.primaryTextColor};;
`;


const contents = [
    {
        name: "Sedan",
        image: require("../../../../../assets/images/cars/sedan.svg"),
    },
    {
        name: "Mini",
        image: require("../../../../../assets/images/cars/mini.svg"),
    },
    {
        name: "7 Seater",
        image: require("../../../../../assets/images/cars/seven-seater.svg"),
    },
    {
        name: "Lada",
        image: require("../../../../../assets/images/cars/lada.svg"),
    },
    {
        name: "Sedan",
        image: require("../../../../../assets/images/cars/sedan.svg"),
    },
    {
        name: "Mini",
        image: require("../../../../../assets/images/cars/mini.svg"),
    },
    {
        name: "7 Seater",
        image: require("../../../../../assets/images/cars/seven-seater.svg"),
    },
    {
        name: "Lada",
        image: require("../../../../../assets/images/cars/lada.svg"),
    },
];
const settings = {
    itemsToShow: 3,
    itemPadding: [25, 0],
    transitionMs: 700
}


const SliderContainer = () => {
    const [selectedCar, setSelectedCar] = useState(1);
    return (
        <>
            <Slider
                settings={settings}
                content={contents.map((content, index) => (
                    <Card key={index} onClick={() => setSelectedCar(index)} className={index == selectedCar ? 'activecard' : ""}>
                        <style jsx global>
                            {styles}
                        </style>
                        <CenteredElement>
                            <Image src={content.image} />
                            <Title>{content.name}</Title>
                        </CenteredElement>
                    </Card>
                ))}
            />
        </>
    );
}

export default SliderContainer;