import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import TestimonySlider from './slider';
import {GraySection, SectionTitle, CenteredText} from '../../section';


const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500
  };

const Testimonies = () => {
    return(
        <GraySection>
            <SectionTitle> Loved for all kinds of reasons. </SectionTitle>
            <CenteredText> Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet. </CenteredText>
            <TestimonySlider></TestimonySlider>
        </GraySection>
    )
}

export default Testimonies;
