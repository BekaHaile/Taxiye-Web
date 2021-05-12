import React from 'react';
import styled from 'styled-components';

const BlockTitle = styled("h3")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;

color: #363636;
`;

const BlockContent = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
  margin:0px;
  padding-top: 20px;
`;

export {BlockContent, BlockTitle}