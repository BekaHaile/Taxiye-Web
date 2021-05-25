import React from "react";
import Slider from "react-slick";
import Card from "./card";


const settings = {
    dots: true,
    infinite: true,
    centerPadding:"20",
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1060,
      settings: {
          slidesToShow: 2
      }
  }, {
      breakpoint: 650,
      settings: {
          initialSlide: 2,
          slidesToShow: 1
      }
  }]
  };

const TestimonySlider = ({testimonies}) => {
  return (
    <Slider {...settings}>
        {testimonies.map((testimony) => (
          <Card key={testimony.id} testimony={testimony} />
        ))}
      </Slider>
  );
};

export default TestimonySlider;
