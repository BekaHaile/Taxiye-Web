import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

const Input = styled('input')`
width: 100%;
padding: 12px 0px;
margin-bottom: 40px;
display: inline-block;
border: 2px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top:10px;
font-size:16px;
&& {
  :focus {
    outline: none;
    border: 2px solid ${theme.colors.primary};
  }
  padding-left: 25px;
  letter-spacing: 22px; 
  background-image: linear-gradient(to left, #ccc 100%, rgba(255, 255, 255, 0) 0%),
  linear-gradient(to left, #ccc 100%, rgba(255, 255, 255, 0) 0%),
  linear-gradient(to left, #ccc 100%, rgba(255, 255, 255, 0) 0%),
  linear-gradient(to left, #ccc 100%, rgba(255, 255, 255, 0) 0%),
  background-size: 20px 2px, 20px 2px,20px 2px,20px 2pxx;
    background-repeat:no-repeat;
    background-position:20px center, 50px center,80px center, 110px center;
`;
const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color:${theme.colors.primaryTextColor};;
`;

type InputProps = {
    id: string;
    label?: string;
    placeholder: string;
    onChange?
    value?
};

const DefaultOtpInput: FunctionComponent<InputProps> = ({
    label,
    id,
    placeholder,
    value,
    onChange
}) => {
    return (
        <>
            <LabelText>{label}</LabelText>
            <Input defaultValue={value} onChange={(e)=>onChange(e.target.value)} type="tel" maxLength={4} placeholder={placeholder} id={id} />
        </>
    );
};

export { DefaultOtpInput, Input }