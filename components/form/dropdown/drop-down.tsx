import React, { FunctionComponent } from "react";
import styled from "styled-components";

const DropDown = styled("select")`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 40px;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 10px;
`;
const LabelText = styled("label")`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #444444;
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

const GenderDropDown: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder,
}) => {
  return (
    <>
      <LabelText>{label}</LabelText>
      <div>
        <DropDown placeholder={placeholder} id={id}>
          <option> Male</option>
          <option> Female</option>
        </DropDown>
      </div>
    </>
  );
};

const CountryDropDown: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder,
}) => {
  return (
    <>
      <LabelText>{label}</LabelText>
      <div>
        <DropDown placeholder={placeholder} id={id}>
          <option> Male</option>
          <option> Female</option>
        </DropDown>
      </div>
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

export { GenderDropDown, CountryDropDown, DefaultDropDown, DropDown };
