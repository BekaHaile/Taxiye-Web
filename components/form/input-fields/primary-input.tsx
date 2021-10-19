import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../../theme/main";
const Input = styled("input")`
width: 100%;
padding: 8px 20px;
margin-bottom: 20px;
display: inline-block;
border: 2px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top:10px;
&& {
  :focus {
    outline: none;
    border: 2px solid ${theme.colors.primary};
  }
  @media (max-width: 768px) {
    width:100%;
    margin-bottom: 20px;
  }
`;

const LabelText = styled("label")`
  font-family: Open Sans;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: ${theme.colors.primaryTextColor}; ;
`;

type InputProps = {
  id: string;
  label?: string;
  placeholder: string;
  type?: string;
  onChange?;
  value?;
};

const DefaultInput: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      {label && <LabelText>{label}</LabelText>}
      <Input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
};

export { DefaultInput, Input };
