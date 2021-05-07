import React from "react";
import styled from "styled-components";

const BlockTitle = styled("h3")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #363636;
  margin: 0px 0px;
  width:inherit;
`;

const BlockContent = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #363636;
  margin-top: 20px;
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0px;
  
`;

const Text = styled(BlockContent)`
width: 250px;
text-align: left;
`;

const Block = styled("div")`
  display: flex;
  align-items: center;
  padding: 0px 75px;
`;

const Numbering = styled("h1")`
  
`;

export {BlockTitle, BlockContent, Block, Numbering, ContentWrapper, Text}
