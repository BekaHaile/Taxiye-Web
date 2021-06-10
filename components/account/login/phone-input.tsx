import React from "react";
import Image from "../image";
import { ContentWrapper, FlexContainer, CustomButton, CheckBoxContainer, ContentContainer, HeaderContainer, CenteredForm, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../elements";
import InputForm from "./forms/phone-input";


const PhoneInput = ({ hero, action }: any) => {

  return (
    <>
      <ContentWrapper>
        {
          hero &&
          <Image hero={hero} />
        }
        <FormContainer>
          <CenteredForm>
            <InputForm title="Welcome To Taxiye!" action={() => action()} />
          </CenteredForm>
        </FormContainer>
      </ContentWrapper>
    </>
  );
};

export default PhoneInput;
