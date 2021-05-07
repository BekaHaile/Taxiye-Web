import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { DefaultSection } from "../section";

const Button = styled("button")`
  height: 39px;
  width:140px;
  background: #A02167;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 20px 0px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border-color: transparent;
`;



const LabelText = styled("label")`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
`;



const Input = styled("input")`
  border: none;
  border-bottom: 0.711458px solid #ababab;
  ::placeholder {
    font-size: 14px;
    line-height: 19px;
    color: #979797;
    font-weight: normal;
  }
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
  padding: 0px 0px 8px 0px;
  width: 100%;
  && {
    :focus {
      outline: none;
      border-bottom: 1px solid #A02167;
    }
`;

const DefaultInput = styled('input')`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
&& {
  :focus {
    outline: none;
    border: 1px solid #A02167;
  }


`;

const DefaultTextArea = styled('textarea')`
width: 100%;
min-height:200px;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
&& {
  :focus {
    outline: none;
    border: 1px solid #A02167;
  }


`;

const CheckBoxLabelText = styled(LabelText)`
  
  padding: 0px 10px;
  
`;

const Checkbox: FunctionComponent<InputProps> = ({
  id,
  label,
  icon,
  placeholder,
}) => {
  return (
    <FormGroup>
      <input id={id} type="checkbox"/>
      <CheckBoxLabelText>{placeholder}</CheckBoxLabelText>
    </FormGroup>
  );
};

const FormGroup = styled("div")`
  display: flex;
  padding: 5px 0px;
  width: 100%;
`;



const Icon = styled("img")`
  width: 11px;
  height: 12px;
  margin-right: 15px;
  margin-top: 6px;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const InlineForm = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  && {
    input {
      width: auto;
      min-width: 47%;
    }
  }
`;

const InputSeparator = styled("div")`
display: flex;
align-self: flex-end;
`;

const InputWrapper = styled('div')`
width: 100%;
`;

type InputProps = {
  id: string;
  label?: string;
  icon?: string;
  placeholder: string;
};

const Inputs: FunctionComponent<InputProps> = ({
  id,
  label,
  icon,
  placeholder,
}) => {
  return (
    <FormGroup>
      {icon !== undefined ? (
        <Icon height="12px" width="11px" src={icon} />
      ) : null}
      <InputWrapper>
        <label htmlFor={id}>
          <LabelText> {label} </LabelText>
        </label>
        <Input
          className={icon !== undefined ? "no-margin" : null}
          id={id}
          placeholder={placeholder}
        />
      </InputWrapper>
    </FormGroup>
  );
};


const DefaultInputs: FunctionComponent<InputProps> = ({
  id,
  label,
  icon,
  placeholder,
}) => {
  return (
    <FormGroup>
      {icon !== undefined ? (
        <Icon height="12px" width="11px" src={icon} />
      ) : null}
      <InputWrapper>
        <label htmlFor={id}>
          <LabelText> {label} </LabelText>
        </label>
        <DefaultInput
          className={icon !== undefined ? "no-margin" : null}
          id={id}
          placeholder={placeholder}
        />
      </InputWrapper>
    </FormGroup>
  );
};

const SecondaryInputs: FunctionComponent<InputProps> = ({
  id,
  icon,
  placeholder,
}) => {
  return (
    <SecondaryInput id={id} placeholder={placeholder} style={{ backgroundImage: `url(${icon})` }}/>
  );
};

const SecondaryInput = styled('input')`
  width: 400px;
  margin:20px auto;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-position: 20px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 50px;
  border-radius:50px;
`;



export { Form, InlineForm, Button, Inputs, InputSeparator, DefaultInput, DefaultTextArea, SecondaryInputs, DefaultInputs, Checkbox };
