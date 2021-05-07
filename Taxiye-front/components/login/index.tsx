import React from "react";
import { DefaultInput, Form, InlineForm, InputSeparator, Button, DefaultInputs, Checkbox } from "../form/inputs";
import Image from "./image";
import styled from "styled-components";
import PhoneInputField from "../form/phone-input";

const ContentWrapper = styled("div")`
  display: grid;
  grid-template-columns: 455px 60%;
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #A02167;
  margin-top:0px;
  padding:0px 0px;
  text-decoration:none;
  
`;

const Title = styled("h3")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
margin: 20px 0px;

/* Black / 444 */

color: #444444;
`;

const SubTitle = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
margin-bottom:60px;
margin-top:0px;

/* Black / 444 */

color: #444444;
`;

const FormContainer = styled(Form)`
  padding: 0px 20px;
  position: relative;
`;

const FlexContainer = styled("div")`
display: flex;
`;
const CenteredForm = styled("div")`

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
`;
const Avatar= styled("img")`
height:22px;
width:15px;
padding:0px 5px 0px 20px ;

`;
const CheckBoxContainer = styled("div")`
margin: 20px 0px;

`;


const Login = () => {
    return (
        <>
            <ContentWrapper>
                <Image />
                <FormContainer>
                    <CenteredForm>
                        <Title>Welcome to Taxiye!</Title>
                        <SubTitle>Please enter your mobile phone number. We’ll send you a text to verify your phone.</SubTitle>
                        <DefaultInputs
                            label="Phone Number *"
                            placeholder="Today"
                            id="date"
                        />
                        <CheckBoxContainer>
                            <Checkbox id="1" placeholder="Keep me signed in"/>
                        </CheckBoxContainer>
                        <Button>Next</Button>
                        <FlexContainer>
                        <SubTitle>Problem with your account?</SubTitle>
                        <FlexContainer>
                        <Avatar src={require("../../assets/icons/main-search.svg")}/>
                        <NavLink href="/">Support Center</NavLink>
                        </FlexContainer>
                        </FlexContainer>
                        
                    </CenteredForm>
                </FormContainer>
            </ContentWrapper>
        </>
    );
};

export default Login;
