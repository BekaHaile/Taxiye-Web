import React from "react";
import styled from "styled-components";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import theme from "../../../theme/main";

const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color:${theme.colors.primaryTextColor};;
  padding-bottom: 10px;
`;

const Container = styled("div")`
  display: flex;
`;
const Code = styled("div")`
  margin: auto;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  padding-top: 12.5px;
  color:${theme.colors.primaryTextColor};;
`;

const CodeContainer = styled("div")`
  position: absolute;
  z-index: 4;
  height: 39px;
  margin-top: 9px;
  margin-left: 60px;
`;

interface PhoneInputFields {
  label?;
  id?;
  placeholder?;
  country_code?;
  phone_no?;
  action?;
}

const PhoneInput = ({
  label,
  id,
  placeholder,
  country_code,
  phone_no,
  action,
}: PhoneInputFields) => {
  return (
    <>
      <LabelText>{label}</LabelText>
      <Container id={id}>
        <CodeContainer>
          <Code>{country_code}</Code>
        </CodeContainer>
        <IntlTelInput
          value={phone_no}
          onPhoneNumberChange={(valid, phone, data) => {
            // let isValid = valid && (phone.length == 9);
            action(valid, data, phone);
          }}
          onPhoneNumberFocus={(valid, phone, data) => {
            // let isValid = valid && (phone.length == 9);
            action(valid, data, phone);
          }}
          placeholder={placeholder}
          containerClassName="intl-tel-input"
          inputClassName="form-control"
          defaultCountry="et"
          autoHideDialCode={false}
          autoPlaceholder={false}
          onlyCountries={["et", "ke", "ss"]}
          preferredCountries={[]}
          formatOnInit={false}
        />
      </Container>
    </>
  );
};

export { PhoneInput };
