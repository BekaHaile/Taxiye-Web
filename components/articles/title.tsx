import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/main';

const Block = styled("div")`

width: 87px;
margin: auto;
margin-bottom:60px;
`;
const SecondaryBlock = styled("div")`
width: 102px;
margin: auto;
margin-bottom:60px;
`;


const Title = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
color:${theme.colors.primaryTextColor};;
display: inline-block;
position: relative;

&:after {
    content: "";
    height: 2px;
    width: 60%;
    background-color: ${theme.colors.primary};
    position: absolute;
    bottom: -.2em;
    left: 50%;
    transform: translate(-50%);
  }
  
`;




export {Title, Block, SecondaryBlock}