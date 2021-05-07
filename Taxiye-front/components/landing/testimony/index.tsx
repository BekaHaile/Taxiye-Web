import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import TestimonySlider from './slider';
import {GraySection, SectionTitle, CenteredText} from '../../section';

const TestimonySliderContainer = styled('div')`
width:100%;
`;

const Testimonies = () => {
    return(
        <GraySection>
            <SectionTitle> Loved for all kinds of reasons. </SectionTitle>
            <CenteredText> Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet. </CenteredText>
            <TestimonySliderContainer>
                <TestimonySlider></TestimonySlider>
                </TestimonySliderContainer>
        </GraySection>
    )
}

export default Testimonies;
