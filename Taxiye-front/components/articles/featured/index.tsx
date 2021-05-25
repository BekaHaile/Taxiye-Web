import React from 'react';
import styled from "styled-components";
import Card from "./card";
import { Title, Block } from '../title';
import { DefaultSection } from "../../section";
import Slider from "../../slider";


const settings = {
  itemsToShow: 1,
  itemPadding: [25, 0],
  transitionMs: 700
}

const FeaturedContent = ({ featured }) => {
  
  return (
    <>
      <DefaultSection>
        <Block>
          <Title>Featured</Title>
        </Block>
        <Slider settings={settings}

          content={featured.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        />

      </DefaultSection>
    </>
  );


}


export default FeaturedContent;

