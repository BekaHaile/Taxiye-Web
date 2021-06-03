import React from "react";
import Card from "./card";
import Slider from "../../slider";
const settings = {
  itemsToShow: 3,
  itemPadding: [25, 0],
  transitionMs: 700
}

const FleetSlider = ({ fleets }) => {

  return (
    <Slider
      content=
      {fleets.map((fleet) => (
        <Card key={fleet.id} fleet={fleet} />
      ))}

      settings={settings}
    />
  );
};

export default FleetSlider;

