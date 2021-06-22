import React from 'react';
import {SectionTitle, GraySection, CenteredText,SectionHeaderContainer, SectionContentContainer } from '../../section';
import ArticleSlider from './slider';

const LastestArticles = ({title, subTitle, articles}) => {
    return(
        <GraySection>
            <SectionHeaderContainer>
            <SectionTitle>
                {title}
            </SectionTitle>
            <CenteredText>{subTitle}</CenteredText>
            </SectionHeaderContainer>
            <ArticleSlider articles={articles}/>
        </GraySection>
    );
}

export default LastestArticles;