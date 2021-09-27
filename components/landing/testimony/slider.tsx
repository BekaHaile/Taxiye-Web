import React from "react";
import Slider from "../../slider";
import Card from "./card";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
`;

// const settings = {
//   dots: true,
//   infinite: true,
//   centerPadding: "20",
//   className: "center",
//   centerMode: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1060,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 650,
//       settings: {
//         initialSlide: 2,
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

const settings = {
  itemsToShow: 3,
  itemPadding: [20, 20],
  transitionMs: 700,
};

const TestimonySlider = ({ testimonies }) => {
  return (
    <>
      <div className="mobile-view">
        <Container>
          {testimonies.map((testimony) => (
            <Card key={testimony.id} testimony={testimony} />
          ))}
        </Container>
      </div>
      <div className="desktop-view">
        <Slider
          settings={settings}
          content={testimonies.map((testimony) => (
            <Card key={testimony.id} testimony={testimony} />
          ))}
        ></Slider>
      </div>
    </>
  );
};

export default TestimonySlider;
