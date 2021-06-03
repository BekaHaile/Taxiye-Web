import React, { FunctionComponent } from "react";
import styled from "styled-components";

const TextArea = styled('textarea')`
width: 100%;
min-height:200px;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;

/* Grey / 97 */

color: #979797;
&& {
  :focus {
    outline: none;
    border: 2px solid #A02167;
  }


`;
const AnotherTextArea = styled(TextArea)`
width: 320px;
min-height:100px;
padding: 10px 10px;
margin:0px;

`;

const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
`;

type InputProps = {
  id: string;
  label?: string;
  placeholder: string;
};

const DefaultTextArea: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder
}) => {
  return (
    <>
      <div>
      <LabelText>{label}</LabelText>
      <TextArea placeholder={placeholder} id={id} />
      </div>
    </>
  );
};

const SecondaryTextArea: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder
}) => {
  return (
    <>
    <div>
      <LabelText>{label}</LabelText>
      <AnotherTextArea placeholder={placeholder} id={id} />
      </div>
    </>
  );
};




export { DefaultTextArea, SecondaryTextArea }