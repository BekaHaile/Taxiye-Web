import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

const BlockTitle = styled("h3")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.colors.primaryLabelColor};
  margin: 0px 0px;
  width: inherit;
`;
const RightBlockTitle = styled(BlockTitle)`
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const BlockContent = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primaryLabelColor};
  margin-top: 5px;
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px;
  margin:auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Container = styled("div")`
  width: 250px;
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
  @media (max-width: 250px) {
    width: 100%;
  }
`;

const Text = styled(BlockContent)`
  width: 250px;
  text-align: left;
  @media (max-width: 250px) {
    width: 100%;
  }
`;

const RightText = styled(Text)`
  width: 250px;
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
  @media (max-width: 250px) {
    width: 100%;
    text-align: left;
  }
`;

const Block = styled("div")`
  display: flex;
  align-items: center;
  padding: 0px 0px;
  margin: 30px 0px;
  @media (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

const Numbering = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  color: #d5d5d5;
  margin: 0px 20px;
  @media (max-width: 768px) {
    order: -1;
    margin: 0px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export {
  BlockTitle,
  BlockContent,
  Block,
  Numbering,
  ContentWrapper,
  Text,
  RightBlockTitle,
  RightText,
  Container,
};
