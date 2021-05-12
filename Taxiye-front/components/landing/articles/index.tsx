import React from 'react';
import {SectionTitle, GraySection, CenteredText,SectionHeaderContainer, SectionContentContainer } from '../../section';
import ArticleSlider from './slider';

const LastestArticles = () => {
    return(
        <GraySection>
            <SectionHeaderContainer>
            <SectionTitle>
                Some of the latest news from us.
            </SectionTitle>
            <CenteredText>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.</CenteredText>
            </SectionHeaderContainer>
            <ArticleSlider />
        </GraySection>
    );
}

export default LastestArticles;