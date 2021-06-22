import React from 'react';
import { PhoneInput } from "../../../form/input-fields/phone-input";
import { FlexContainer, CustomButton, CheckBoxContainer, ContentContainer, HeaderContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../../account/elements";
import Link from "next/link";
import { Checkbox } from "../../../form/inputs";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { addPhone, setKeepMeSignedIn } from "../../../../redux/actions/user";

const PhoneInputForm = ({ title, action }) => {
    const country_code = useSelector((state) => state["user"]["country_code"]);
    const phone_no = useSelector((state) => state["user"]["phone_no"]);
    const isValid = useSelector((state) => state["user"]["isValid"]);
    const keepMeSignedIn = useSelector((state) => state["user"]["keepMeSignedIn"]);

    return (
        <>
            <HeaderContainer>
                <Title>{title}</Title>
                <SubTitle>Please enter your mobile phone number. We’ll send you a text to verify your phone.</SubTitle>
            </HeaderContainer>
            <ContentContainer>
                <InputContainer>
                    <PhoneInput
                        phone_no={phone_no}
                        country_code={country_code}
                        label="Phone Number *"
                        placeholder="your phone number"
                        id="phone"
                        action={(isValid, data, phone_no) => {
                            store.dispatch(addPhone({ country: `${data.name}`, phone_no: phone_no, country_code: `+${data.dialCode}`, isValid:isValid }));
                        }}
                    />
                </InputContainer>
                <CheckBoxContainer>
                    <Checkbox checked={keepMeSignedIn} onClick={(val)=>store.dispatch(setKeepMeSignedIn(val))} id="1" placeholder="Keep me signed in" />
                </CheckBoxContainer>

                <CustomButton disabled={!isValid} onClick={() => action()}>Next</CustomButton>

                <FlexContainer>
                    <SubTitle>Problem with your account?</SubTitle>
                    <FlexContainer>
                        <Avatar src={require("../../../../assets/icons/main-search.svg")} />
                        <NavLink href="/">Support Center</NavLink>
                    </FlexContainer>
                </FlexContainer>
            </ContentContainer>
        </>
    );
}

export default PhoneInputForm;