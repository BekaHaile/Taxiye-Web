import React from "react";
import styled from "styled-components";

const Input = styled('input')`
width: 100%;
padding: 12px 20px;
margin-bottom: 40px;
display: inline-block;
border: 2px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top:10px;
&& {
  :focus {
    outline: none;
    border: 2px solid #A02167;
  }
`;
const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
`;

const DefaultInput = ({
    label,
    id,
    placeholder,
  }) => {
    return (
      <>
      <LabelText>{label}</LabelText>
     <Input placeholder={placeholder} id={id}/>
     </>
    );
  };

export {DefaultInput, Input}