import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

const BlockTitle = styled("h3")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.colors.primaryLabelColor};;
  margin: 0px 0px;
  width:inherit;
`;
const RightBlockTitle = styled(BlockTitle)`

  text-align:right;
`;

const BlockContent = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primaryLabelColor};;
  margin-top: 5px;
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px;
  
`;

const Container = styled('div')`
width: 250px;
`;

const Text = styled(BlockContent)`
width: 250px;
text-align: left;
`;



const RightText = styled(Text)`
width: 250px;
text-align: right;
`;


const Block = styled("div")`
  display: flex;
  align-items: center;
  padding: 0px 0px;
  margin: 30px 0px;
`;

const Numbering = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 65px;
text-align: center;
color: #D5D5D5;
margin:0px 20px;
  
`;

export {BlockTitle, BlockContent, Block, Numbering, ContentWrapper, Text, RightBlockTitle, RightText, Container}
