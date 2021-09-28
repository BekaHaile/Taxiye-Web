import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";

const Container = styled("div")`
  width: 705px;
  margin: auto;
  border-top: 1px solid ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.primary};
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuoteText = styled("h3")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  color: ${theme.colors.quoteTextColor};
  padding: 28px 0px;
`;

const Quote = ({ quote }) => {
  return (
    <>
      <Container>
        <QuoteText>{quote}</QuoteText>
      </Container>
    </>
  );
};

export default Quote;
