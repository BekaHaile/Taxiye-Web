import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Button = styled("button")`
  background: #A02167;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px;
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

const FormGroup = styled("div")`
  display: flex;
  padding: 10px 0px;
  width: 100%;
`;

const Icon = styled("img")`
  height:fit-content;
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
    }
  }
`;

const InputSeparator = styled("div")`
display: flex;
align-self: flex-end;
`;
const DataList = styled("datalist")`
background-color:#fff;
position: absolute;
`;

const Option = styled("option")`
background-color:#fff;
`;

const InputWrapper = styled('div')`
width: 100%;
`;

type InputProps = {
  id: string;
  label: string;
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
        <Icon src={icon} />
      ) : null}
      <InputWrapper>
        <label htmlFor={id}>
          <LabelText> {label} </LabelText>
        </label>
        <Input
          className={icon !== undefined ? "no-margin" : null}
          id={id}
          placeholder={placeholder}
          list="data"
        />
        <DataList id="data">
            <Option value="Sarbet">
                
                
            </Option>
            
          </DataList>
      </InputWrapper>
    </FormGroup>
  );
};

export {Form, InlineForm, Button, Inputs, InputSeparator};
