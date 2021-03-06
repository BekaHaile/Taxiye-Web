import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

const Card = styled("div")`
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
  @media (max-width: 300px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  @media (max-width: 500px) {
    margin: 0px;
    padding: 0px;
  }
`;

const CardWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardContent = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding-top: 30px;
`;

const CardTitle = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
`;

const Image = styled("img")`
  width: 187px;
  height: 61px;
  filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.161));
  border-radius: 10px;
  margin: auto;
  display: block;
  @media (max-width: 187px) {
    width: 100%;
  }
`;

export { Card, CardWrapper, CardContent, CardTitle, Image };
