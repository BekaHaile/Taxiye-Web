import React from "react";
import styled from "styled-components";

const Button = styled("button")`
  background: #A02167;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border-color: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
`;
const SecondaryButton = styled.button`
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #A02167;
  border-color: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid #A02167;
`;

export {Button, SecondaryButton}