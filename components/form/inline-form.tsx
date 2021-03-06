import React from "react";
import styled from "styled-components";

const InlineForm = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap:60px;
  && {
    input {
      width: inherit;
    }
  }
  @media (max-width: 768px) {
    flex-wrap:wrap;
    width:100%;
    gap:20px;
  }
`;

export {InlineForm}