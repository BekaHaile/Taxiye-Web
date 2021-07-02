import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../../theme/main";
import { countryList } from "./country-list";

const DropDown = styled("select")`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 8px 20px;
  margin-bottom: 40px;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 10px;
`;
const SecondaryDropDown = styled(DropDown)`
  padding: 12px 20px;
`;
const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: ${theme.colors.primaryTextColor};
  width: 100%;
`;

type InputProps = {
  id: string;
  label?: string;
  placeholder: string;
  type?: string;
  value?;
  onChange?;
  items?;
};


const GenderDropDown = ({ label, id, placeholder, value, onChange }) => {
  return (
    <>
      <DefaultDropDown
        label={label}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        items={['Male','Female']}
        value={value}
      />
    </>
  );
};

const CountryDropDown = ({ label, id, placeholder, value, onChange }) => {
  return (
    <>
      <DefaultDropDown
        label={label}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        items={countryList}
        value={value}
      />
    </>
  );
};

const DefaultDropDown: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  items,
}) => {
  return (
    <>
      <LabelText>{label}</LabelText>
      <div className="defaultDropDown">
        <DropDown
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
        >
          {items.map((item, key) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            );
          })}
        </DropDown>
      </div>
    </>
  );
};

export { GenderDropDown, CountryDropDown, DefaultDropDown, SecondaryDropDown };
