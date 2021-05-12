import React from 'react';
import styled from 'styled-components';

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 60px;
`;

const DefaultSection = styled(Section)`
background: #fff;
`;
const SecondarySection = styled(DefaultSection)`
  padding: 60px 60px;
`;

const GraySection = styled(Section)`
background: #f9f9f9;
`;

const SectionHeaderContainer = styled("div")`

`;

const SectionContentContainer = styled("div")`

  padding-top:60px;

`;

const SectionTitle = styled("h1")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #A02167;
  text-align: center;
  margin: 0;
  padding-bottom:10px;
`;

const CenteredText = styled("p")`
  font-size: 18px;
  line-height: 25px;
  margin:0px;
  padding:0px;
  text-align: center;
  color: #444444;
  max-width: 800px;
`;

export {GraySection, DefaultSection, SecondarySection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer};