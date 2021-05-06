import React from 'react';
import Card from "./card";
import styled from "styled-components";
import {DefaultSection} from "../../section";

const CardSection = styled("div")`
  display: grid;
  grid-template-columns: auto auto auto;

 
`;


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

const ArticleList = () => {
    return(
        <>
        <CardSection>
         {Articles.map((article) => (
           
        <Card key={article.date} article={article} />
        
      ))}
      </CardSection>
        
        </>
    );
}

export default ArticleList;