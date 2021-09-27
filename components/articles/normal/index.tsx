import React from 'react';
import styled from "styled-components";
import { Title, SecondaryBlock } from '../title';
import ArticleSlider from "./slider";
import { GraySection } from "../../section";


const FeaturedContent = ({ articles, title }) => {
  return (
    <>
      <GraySection>
        <SecondaryBlock>
          <Title>{title}</Title>
        </SecondaryBlock>
        <ArticleSlider unfeatured={articles}></ArticleSlider>

      </GraySection>
    </>
  );
}

export default FeaturedContent;