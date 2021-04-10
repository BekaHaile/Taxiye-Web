import React from 'react';
import styled from 'styled-components';

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  margin: 0px 0px;
`;

const DefaultSection = styled(Section)`
background: #fff;
`;

const GraySection = styled(Section)`
background: #F9F9F9;
`;

const SectionTitle = styled("h1")`
  ont-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #e45397;
  margin: 0;
`;

const CenteredText = styled("p")`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #444444;
  max-width: 800px;
`;

export {GraySection, DefaultSection, SectionTitle, CenteredText};