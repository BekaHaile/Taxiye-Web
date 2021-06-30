import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

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

color: ${theme.colors.secondaryTextColor};
&& {
  :focus {
    outline: none;
    border: 2px solid ${theme.colors.primary};
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
  color:${theme.colors.primaryTextColor};;
`;

type InputProps = {
  id: string;
  action?,
  value?,
  label?: string;
  placeholder: string;
};

const DefaultTextArea: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder,
  action,
  value
}) => {
  return (
    <>
      <div>
        <LabelText>{label}</LabelText>
        <TextArea value={value} onInput={action} placeholder={placeholder} id={id} />
      </div>
    </>
  );
};

const SecondaryTextArea: FunctionComponent<InputProps> = ({
  label,
  id,
  value,
  placeholder,
  action,
}) => {
  return (
    <>

      {label && <LabelText>{label}</LabelText>}
      <AnotherTextArea value={value} onInput={(event) => action(event)} placeholder={placeholder} id={id} />

    </>
  );
};




export { DefaultTextArea, SecondaryTextArea }