import React from "react";
import Slider from "react-slick";
import Card from "./card";

const Testimonies = [
  {
    name: "Courtney Henry",
    title:"CEO, Jorka Events.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. ",
    image: require("../../../assets/images/testi_image.png"),
    rate: 4,
  },
  {
    name: "Courtney Henry",
    title:"CEO, Jorka Events.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. ",
    image: require("../../../assets/images/testi_image.png"),
    rate: 4,
  },
  {
    name: "Courtney Henry",
    title:"CEO, Jorka Events.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. ",
    image: require("../../../assets/images/testi_image.png"),
    rate: 4,
  },
  {
    name: "Courtney Henry",
    title:"CEO, Jorka Events.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. ",
    image: require("../../../assets/images/testi_image.png"),
    rate: 4,
  },

];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const TestimonySlider = () => {
  return (
    <Slider {...settings}>
        {Testimonies.map((testimony) => (
          <Card key={testimony.name} testimony={testimony} />
        ))}
      </Slider>
  );
};

export default TestimonySlider;
