
import React from "react";
import styled from "styled-components";

const Card = styled('div')`
justify-content: center;
align-items: center;
padding: 0px 20px;
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 30px;
width: 300px;
max-width: 300px;
height: 186px;
`;

const CardWrapper = styled('div')`
display: flex;
justify-content: center;


`;


const CardContent = styled('p')`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
text-align: center;
color: #444444;
margin: 30px 0px;
`;

const CardTitle = styled('p')`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 44px;
`;



const Image = styled('img')`
width: 187px;
height: 61px;
filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
border-radius: 10px;
margin:auto;
display: block;

`;

export {Card, CardWrapper, CardContent, CardTitle, Image};