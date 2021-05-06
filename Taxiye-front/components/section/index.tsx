import React from 'react';
import styled from 'styled-components';

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
`;

const DefaultSection = styled(Section)`
background: #fff;
`;
const SecondarySection = styled(DefaultSection)`
  margin: 30px 60px;
`;

const GraySection = styled(Section)`
background: #E5E5E5;
`;

const SectionTitle = styled("h1")`
  font-family: Open Sans;
  width:400px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #e45397;
  text-align: center;
  margin: 0;
`;

const CenteredText = styled("p")`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #444444;
  max-width: 800px;
`;

export {GraySection, DefaultSection, SecondarySection, SectionTitle, CenteredText};