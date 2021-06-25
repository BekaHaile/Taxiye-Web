import React from "react";
import styled from "styled-components";
import Title from "./title";
import BookingForm from "./form";
import SearchUser from "./user-search";
import Vehicles from "./vehicles";

const ContentContainer = styled("div")`
  padding: 10px 20px;
  border-bottom: 5px solid #eff2f5;
  width: -webkit-fill-available;
`;
const EmptyContentContainer = styled("div")`
  padding: 10px 20px;
  width: -webkit-fill-available;
`;

const Container = () => {
  return (
    <>
      <Title />
      <ContentContainer>
        <SearchUser />
      </ContentContainer>
      <ContentContainer>
        <BookingForm />
      </ContentContainer>
      <EmptyContentContainer>
        <Vehicles />
      </EmptyContentContainer>
    </>
  );
};

export default Container;
