import React, { useState } from "react";
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
margin-top: 9px;
margin-left:60px;
`;

const PhoneInput = ({ label, id, placeholder, country_code, phone_no, action }) => {


    return (
        <>
            <LabelText >{label}</LabelText>
            <Container>
                <CodeContainer>
                    <Code>{country_code}</Code>
                </CodeContainer>
                <IntlTelInput
                    value={phone_no}
                    onPhoneNumberChange={(valid, phone, data) => {
                        action(valid, data, phone);
                    }}
                    onPhoneNumberFocus={(valid, phone, data) => {
                        action(valid, data, phone);
                    }}
                    placeholder={placeholder}
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