import React from 'react';
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Card from "./card";
import {Title,TitleBorder, Block} from '../title';
import {DefaultSection} from "../../section";


const Articles = [
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipi ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum.",
      author: "Neguse B.",
      date: "June 23, 2020",
      image: require("../../../assets/Data/images/articles/news_2.jpg"),
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipi ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum.",
      author: "Neguse B.",
      date: "June 24, 2020",
      image: require("../../../assets/Data/images/articles/news_3.jpg"),
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipi ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum.",
      author: "Neguse B.",
      date: "June 25, 2020",
      image: require("../../../assets/Data/images/articles/news_4.jpg"),
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipi ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum.",
      author: "Neguse B.",
      date: "June 26, 2020",
      image: require("../../../assets/Data/images/articles/news_2.jpg"),
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipi ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum.",
      author: "Neguse B.",
      date: "June 27, 2020",
      image: require("../../../assets/Data/images/articles/news_3.jpg"),
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipi ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum.",
      author: "Neguse B.",
      date: "June 28, 2020",
      image: require("../../../assets/Data/images/articles/news_4.jpg"),
    },
  ];

  const FeaturedContent = () => {
    return(
        <>
        <Block>
        <Title>Featured</Title>
        <TitleBorder></TitleBorder>
        </Block>
         <DefaultSection>
        <Carousel itemsToShow={1} itemPadding={[25, 0]} transitionMs={700}>
        {Articles.map((article) => (
        <Card key={article.date} article={article} />
      ))}
        </Carousel>
        </DefaultSection>
        </>
    );
}

export default FeaturedContent;