import React from "react";
import styled from "styled-components";

const InlineForm = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  && {
    input {
      width: inherit;
    }
  }
`;

export {InlineForm}