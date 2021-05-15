import React, {useState} from "react";
import styled from "styled-components";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
  padding-bottom:10px;
`;

const Container = styled("div")`
display:flex;
`;
const Code = styled("div")`
margin:auto;
  font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
padding-top:12.5px;
color: #444444;
  
`;

const CodeContainer = styled("div")`
position: absolute;
z-index: 4;
height: 39px;
margin-top: 10px;
margin-left:55px;
`;

const PhoneInput = ({ label, id, placeholder }) => {
    const [phone_code, setPhoneCode] = useState("251");
    const [is_phone_valid, setPhoneValidation] = useState(false);
    const [phone_number, setPhoneNumber] = useState("");

    return (
        <>
            <LabelText >{label}</LabelText>
            <Container>
            <CodeContainer>
                    <Code>{"+"+phone_code}</Code>
            </CodeContainer>
            <IntlTelInput
                onPhoneNumberChange ={(valid, phone, data)=>{ 
                    setPhoneCode(data.dialCode);
                    setPhoneValidation(valid);
                    setPhoneNumber(phone);
                }}
                onPhoneNumberFocus = {(valid, phone, data)=>{ 
                    console.log(data);
                    setPhoneCode(data.dialCode);
                    setPhoneValidation(valid);
                    setPhoneNumber(phone);
                }}
                placeholder = {placeholder}
                containerClassName="intl-tel-input"
                inputClassName="form-control"
                defaultCountry="et"
                autoHideDialCode={false}
                autoPlaceholder={false}
            />
            </Container>
        </>
    );
};





export { PhoneInput }