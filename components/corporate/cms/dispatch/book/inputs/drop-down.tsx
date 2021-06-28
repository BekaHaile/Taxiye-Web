import { Input } from "../../../../../form/input-fields/primary-input";
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Loader } from "../../../../../loading/loading";
const LabelText = styled("label")`
  font-family: Open Sans;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
`;

const Container = styled("div")`
  position: absolute;
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  z-index: 30;
  overflow-y: auto;
`;
const MainContainer = styled("div")`
  position: relative;
`;

const Title = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
`;
const SubTitle = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #979797;
`;
const LoadingContainer = styled("div")`
  position: absolute;
  right: -20px;
  top: 50%;
  width: 50px;
  height: 50px;
`;
const MainDropDown = styled(Input)`
  padding: 6px 0px 8px 0px;
  border: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0px;
  margin:0;
  && {
    :focus {
      outline: none;
      border:0;
      border-bottom: 1px solid #A02167;
    }
`;

type InputProps = {
  id: string;
  label?: string;
  placeholder: string;
  type?: string;
  onChange?;
  value?;
  items?;
  action?;
  loading?;
  selectedItem?;
};

const PrimaryDropDown: FunctionComponent<InputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  items,
  action,
  loading,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <LabelText>{label}</LabelText>
      <LoadingContainer>{loading ? <Loader /> : null}</LoadingContainer>

      <MainContainer>
        <MainDropDown
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={() => setShow(!show)}
          readOnly={true}
        />
        {items &&
          (items.length > 0 && show ? (
            <Container>
              {items.map((item, key) => (
                <div
                  key={key}
                  className="suggestion-item"
                  onClick={() => {
                    action(item);
                    setShow(!show);
                  }}
                >
                  <Title>{item.region_name}</Title>
                  <SubTitle>{item.vehicle_type}</SubTitle>
                </div>
              ))}
            </Container>
          ) : null)}
      </MainContainer>
    </>
  );
};

export { PrimaryDropDown };
