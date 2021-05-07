import React from 'react';
import {Title,TitleBorder, SecondaryBlock} from '../title';
import ArticleSlider from "./slider";
import {GraySection} from "../../section";
import {Button} from "../../form/inputs";


const FeaturedContent = () => {
    return(
        <>
        <GraySection>
        <SecondaryBlock>
        <Title>All Articles</Title>
        <TitleBorder></TitleBorder>
        </SecondaryBlock>
        <ArticleSlider></ArticleSlider>
        <Button>Load More</Button>
        </GraySection>
        </>
    );
}

export default FeaturedContent;