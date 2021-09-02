import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import Link from "next/link";
import theme from "../../theme/main";

const LabelText = styled("label")`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color:${theme.colors.primaryTextColor};;
`;



const Input = styled("input")`
  border: none;
  border-bottom: 0.711458px solid #ababab;
  ::placeholder {
    font-size: 14px;
    line-height: 19px;
    color: ${theme.colors.secondaryTextColor};
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
      border-bottom: 1px solid ${theme.colors.primary};
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
    border: 1px solid ${theme.colors.primary};
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
  onClick,
  checked
}) => {
  return (
    <>
      <input checked={checked} onClick={()=>onClick(!checked)} id={id} type="checkbox" />
      <CheckBoxLabelText>{placeholder}</CheckBoxLabelText>
    </>
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
  shadow?: boolean,
  onInput?,
  onChange?,
  onClick?,
  lists?: any,
  value?:string,
  checked?:boolean

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

const SecondaryInput = styled('input')`
  width: 100%;
  margin:0px auto;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-position: 20px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 50px;
  border-radius:50px;
  outline:none;
`;
const SecondaryInputWithShadow = styled(SecondaryInput)`
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
`;

const DropDownList = styled("ul")`
text-align:left;
background-color:white;
position:absolute;
z-index:100;
padding:5px;
display:none;
`;
const DropDownListItem = styled("li")`
padding:5px 0px;
border 1px solid red; 
list-style-type: none;
margin:5px;
`;

const SecondaryInputs: FunctionComponent<InputProps> = ({
  id,
  icon,
  value,
  placeholder,
  shadow,
  onInput,
  onChange,
  lists
}) => {
  if (shadow)
    return (
      <>
        <SecondaryInputWithShadow  onKeyUp={onInput.bind(this)} id={id} placeholder={placeholder} style={{ backgroundImage: `url(${icon})` }} />
       
      </>
    );
  return (
    <>
      <SecondaryInput autoComplete="off"  onKeyUp={onInput} id={id} placeholder={placeholder} style={{ backgroundImage: `url(${icon})` }} />
      <DropDownList id="article-list">
        {lists.map((list, index) => (
          <Link key={index} href={`/articles/${list.id}`}>
          <DropDownListItem > {list.headerTitle}</DropDownListItem>
          </Link>
        ))}
      </DropDownList>
      
    </>
  );
};




const Container = styled('div')`
  display:flex;
  justify-content:left;
  margin-top:3px
 
`;
const SecondContainer = styled('div')`
  
  margin:1px 0px;
 
`;

const CustomInput = styled(DefaultInput)`
  
border: 1px solid #cacaca;
height:45px;
border-left:none;
margin-left: -3px;
margin-top:1px;
 
`;



function PhoneInputField({ label, id, placeholder, country }) {
  return (
    <>
      <label>{label}</label>
      <Container>
        <SecondContainer>
          <PhoneInput

            country={country}

          // value={this.state.phone}
          // onChange={phone => this.setState({ phone })}
          />
        </SecondContainer>
        <CustomInput placeholder={placeholder} />
      </Container>
    </>
  )
}





export { Form, InlineForm, Inputs, InputSeparator, DefaultInput, SecondaryInputs, DefaultInputs, Checkbox, PhoneInputField };
