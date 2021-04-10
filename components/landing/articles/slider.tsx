import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./card";

const Articles = [
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipi ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
    author: "Neguse B.",
    date: "June 23, 2020",
    image: require("../../../assets/Data/images/articles/news_2.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipi ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
    author: "Neguse B.",
    date: "June 24, 2020",
    image: require("../../../assets/Data/images/articles/news_3.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipi ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
    author: "Neguse B.",
    date: "June 25, 2020",
    image: require("../../../assets/Data/images/articles/news_4.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipi ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
    author: "Neguse B.",
    date: "June 26, 2020",
    image: require("../../../assets/Data/images/articles/news_2.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipi ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
    author: "Neguse B.",
    date: "June 27, 2020",
    image: require("../../../assets/Data/images/articles/news_3.jpg"),
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipi ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
    author: "Neguse B.",
    date: "June 28, 2020",
    image: require("../../../assets/Data/images/articles/news_4.jpg"),
  },
];


const ArticleSlider = () => {
  return (
    <Carousel itemsToShow={3} itemPadding={[25, 0]} transitionMs={700}>
      {Articles.map((article) => (
        <Card key={article.date} article={article} />
      ))}
    </Carousel>
  );
};

export default ArticleSlider;
