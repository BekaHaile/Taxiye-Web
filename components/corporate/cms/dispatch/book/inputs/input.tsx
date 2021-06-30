import {Input} from "../../../../../form/input-fields/primary-input";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Loader } from "../../../../../loading/loading";
import theme from "../../../../../../theme/main";
const LabelText = styled("label")`
  font-family: Open Sans;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color:${theme.colors.primaryTextColor};;
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
  color:${theme.colors.primaryTextColor};;
`;
const SubTitle = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.secondaryTextColor};
`;
const LoadingContainer = styled("div")`
  position: absolute;
  right: -20px;
  top: 50%;
  width: 50px;
  height: 50px;
`;
const TextField = styled(Input)`
  padding: 6px 0px 8px 0px;
  border: 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0px;
  margin:0;
  && {
    :focus {
      outline: none;
      border:0;
      border-bottom: 1px solid ${theme.colors.primary};
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
    onBlur?;
    show?;
  };
  
const PrimarySearchInput: FunctionComponent<InputProps> = ({
    label,
    id,
    placeholder,
    value,
    onChange,
    items,
    action,
    loading,
    selectedItem,
    onBlur,
    show
  }) => {
    return (
      <>
        <LabelText>{label}</LabelText>
        <MainContainer >
          <TextField
            id={id}
            placeholder={placeholder}
            value={value}
            type="select"
            onChange={onChange}
            autoComplete="off"
            onBlur={onBlur}
            
          />
          <LoadingContainer>{loading ? <Loader /> : null}</LoadingContainer>
          {items &&
            (items.length > 0 ? (
              <Container >
                {items.map((item, key) => (
                  <div
                    key={key}
                    className={
                      selectedItem && item.id == selectedItem.id
                        ? "suggestion-item active"
                        : "suggestion-item"
                    }
                    onClick={() => action(item)}
                  >
                    <Title>{item.name}</Title>
                    <SubTitle>{item.phone_no}</SubTitle>
                  </div>
                ))}
              </Container>
            ) : null)}
        </MainContainer>
      </>
    );
  };


export { PrimarySearchInput };