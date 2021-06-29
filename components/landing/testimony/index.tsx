import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import TestimonySlider from './slider';
import { GraySection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer } from '../../section';

const TestimonySliderContainer = styled(SectionContentContainer)`
max-width:1300px;
width:100%;
`;

const Testimonies = ({title, subTitle, testimonies}) => {
    return (
        <GraySection>
            <SectionHeaderContainer>
                <SectionTitle> {title} </SectionTitle>
                <CenteredText> {subTitle} </CenteredText>
            </SectionHeaderContainer>
            <TestimonySliderContainer>
                <TestimonySlider testimonies={testimonies}></TestimonySlider>
            </TestimonySliderContainer>
        </GraySection>
    )
}

export default Testimonies;
