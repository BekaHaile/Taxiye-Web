import React from 'react';
import styled from 'styled-components';

const Block = styled("div")`

width: 87px;
margin:30px auto;
`;
const SecondaryBlock = styled("div")`

width: 102px;
margin:30px auto;
`;

const Title = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
color: #444444;
margin: 3px 0px;
`;


const TitleBorder = styled("div")`

border-bottom: 2px solid #A02167;
width:50px;
margin:auto;

`;


export {Title, TitleBorder, Block, SecondaryBlock}