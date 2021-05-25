import React from 'react';
import styled from "styled-components";
import {Title, SecondaryBlock} from '../title';
import ArticleSlider from "./slider";
import {GraySection, SectionContentContainer} from "../../section";
import {Button} from "../../form/buttons/primary-button";

const CustomButton = styled(Button)`
  padding: 5px 20px;
`;

const FeaturedContent = ({unfeatured}) => {
    return(
        <>
        <GraySection>
        <SecondaryBlock>
        <Title>All Articles</Title>
        </SecondaryBlock>
        <ArticleSlider unfeatured={unfeatured}></ArticleSlider>
        <CustomButton>Load More</CustomButton>
        </GraySection>
        </>
    );
}

export default FeaturedContent;