import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

const Button = styled("button")`
  background: ${theme.colors.primary};
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
  color: ${theme.colors.primary};
  border-color: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid ${theme.colors.primary};
`;
const PrimaryButton = styled.button`
  background: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid ${props => props.color ? props.color: `${theme.colors.secondaryTextColor}`};
  &:hover{
    border:1px solid ${theme.colors.primary};
    }
`;

export {Button, SecondaryButton, PrimaryButton}