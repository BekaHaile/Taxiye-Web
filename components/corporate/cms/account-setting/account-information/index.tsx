import React from "react";
import styled from "styled-components";
import Form from "./form";

const MainContainer = styled("div")`
  height: 100%;
`;

const AccountInformation = () => {
  return (
    <>
      <MainContainer>
        <Form />
      </MainContainer>
    </>
  );
};

export default AccountInformation;
