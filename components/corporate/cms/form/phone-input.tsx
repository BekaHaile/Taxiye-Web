import countries from "../../../../assets/Data/countries.json";
import { Input, Select } from "antd";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

const { Option } = Select;

const PhoneInput = ({ action, code, phone_no, placeholder, id }) => {
  const [codeValue, setCodeValue] = useState(code);
  const selectBefore = (
    <Select
      value={codeValue}
      className="select-before"
      style={{ minWidth: "80px" }}
      showSearch
      onChange={(val) => {
        setCodeValue(val);
      }}
    >
      {countries.map((country, index) => (
        <Option key={index} value={country.dial_code}>
          <ReactCountryFlag countryCode={country.code} svg />{" "}
          {country.dial_code}
        </Option>
      ))}
    </Select>
  );
  return (
    <Input
      addonBefore={selectBefore}
      id={id}
      placeholder={placeholder}
      value={phone_no}
      onChange={(e) => {
        const value = e.target.value;
        action({ phone: value, code: codeValue });
      }}
    />
  );
};

export default PhoneInput;
