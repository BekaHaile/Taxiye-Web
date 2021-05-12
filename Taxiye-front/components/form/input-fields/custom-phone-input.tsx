import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import { Input } from "./primary-input";


const CustomInput = styled(Input)`
margin:8px -2px;
border-left:none;
border-top-left-radius: 0px;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 0px;
padding-left:50px;
&& {
    :focus {
        border:2px solid #A02167;
        border-left:none;
    }
`;

const Selector = styled("select")`
border: 2px solid #ccc;
border-right:none;
border-top-right-radius: 0px;
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 0px;
-webkit-appearance: none;
-moz-appearance: none;
background: transparent;
width:70px;
background-image: url("${require("../../../assets/icons/phone-dropdown.svg")}");
background-repeat: no-repeat;
background-position-x: 100%;
background-position-y: 50%;
padding: 12px 20px;
margin: 8px 0;
&& {
    :focus {
        box-shadow: none; 
        outline: none;   
    }
`;

const CountryCodeContainer = styled("div")`
display:flex;
`;

const Code = styled("div")`
position: absolute;
  top: 50%;
  left:20px;
  transform: translate(-50%, -50%);
`;

const CodeContainer = styled("div")`
position: relative;
`;
const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
  padding-bottom:10px;
`;


const { countries } = require("../../../assets/Data/country-code.json");

let countriesList = countries.length > 0
    && countries.map((item, i) => {
        return (
            item.numbercode == "+251" ?
                <option selected="selected" key={i} value={item.numbercode}>{item.emoji}&emsp;{item.numbercode}&emsp;{item.name}</option> :
                <option key={i} value={item.numbercode}>{item.emoji}&emsp;{item.numbercode}&emsp;{item.name}</option>

        )
    });

const Container = styled("div")`
display:flex;
`;

const PhoneInput = ({ label, id, placeholder }) => {
    const [phone_code, setPhoneCode] = useState("+251");
    const [phonenumber, setPhoneNumber] = useState("");
    return (
        <>  <LabelText >{label}</LabelText>

            <Container>
                <CountryCodeContainer>
                    <Selector id="phonecode" onChange={(event) => { setPhoneCode(event.target.value); }}>
                        {countriesList}
                    </Selector>

                </CountryCodeContainer>
                <CodeContainer>
                    <Code>{phone_code}</Code>
                </CodeContainer>
                <CustomInput type="number" onInput={(event) => { setPhoneNumber(phone_code + event.target.value); }} placeholder={placeholder} id={id} />

            </Container>

        </>
    );
};



export { PhoneInput }