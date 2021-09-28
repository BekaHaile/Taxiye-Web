import React from "react";
import Card from "./card";
import Slider from "../../slider";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top:20px;
  width:100%;
`;

const settings = {
  itemsToShow: 3,
  itemPadding: [20, 20],
  transitionMs: 700,
};
const FleetSlider = ({ fleets }) => {
  return (
    <>
      <div className="mobile-view">
        <Container>
          {fleets.map((fleet) => (
            <Card key={fleet.id} fleet={fleet} />
          ))}
        </Container>
      </div>
      <div className="desktop-view">
        <Slider
          content={fleets.map((fleet) => (
            <Card key={fleet.id} fleet={fleet} />
          ))}
          settings={settings}
        />
      </div>
    </>
  );
};

export default FleetSlider;
