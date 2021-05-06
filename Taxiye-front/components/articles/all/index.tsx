import React from 'react';
import {Title,TitleBorder, SecondaryBlock} from '../title';
import ArticleSlider from "./slider";
import {DefaultSection} from "../../section";
import {Button} from "../../form/inputs";


const FeaturedContent = () => {
    return(
        <>
        <DefaultSection>
        <SecondaryBlock>
        <Title>All Articles</Title>
        <TitleBorder></TitleBorder>
        </SecondaryBlock>
        <ArticleSlider></ArticleSlider>
        <Button>Load More</Button>
        </DefaultSection>
        </>
    );
}

export default FeaturedContent;