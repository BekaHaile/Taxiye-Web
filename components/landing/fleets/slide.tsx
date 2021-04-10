import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./card";

const Fleets = [
  {
    name: "Mini",
    description:
      "A regular, economical and comfortable AC hatchback that becomes your everyday ride. ",
    image: require("../../../assets/images/fleets/fleet-1.png"),
    price: "10 Birr",
  },
  {
    name: "Sedan",
    description:
      "  Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.",
    image: require("../../../assets/images/fleets/fleet-2.png"),
    price: "10 Birr",
  },
  {
    name: "7 Seater",
    description:
      "A perfect choice for your weekend getaways, with plenty of room for everyone including that extra bag.",
    price: "10 Birr",
    image: require("../../../assets/images/fleets/fleet-3.png"),
  },
  {
    name: "Mini",
    description:
      "A regular, economical and comfortable AC hatchback that becomes your everyday ride. ",
    image: require("../../../assets/images/fleets/fleet-1.png"),
    price: "10 Birr",
  },
  {
    name: "Sedan",
    description:
      "  Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.",
    image: require("../../../assets/images/fleets/fleet-2.png"),
    price: "10 Birr",
  },
  {
    name: "7 Seater",
    description:
      "A perfect choice for your weekend getaways, with plenty of room for everyone including that extra bag.",
    price: "10 Birr",
    image: require("../../../assets/images/fleets/fleet-3.png"),
  },
];

const FleetSlider = () => {
  return (
      <Carousel itemsToShow={3} itemPadding={[25, 0]} transitionMs={700}>
        {Fleets.map((fleet) => (
          <Card key={fleet.name} fleet={fleet} />
        ))}
      </Carousel>
  );
};

export default FleetSlider;
