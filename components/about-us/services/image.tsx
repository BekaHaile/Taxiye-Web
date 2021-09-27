import * as React from "react";
import styled from "styled-components";

const Image = styled("img")`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Device({ url }) {
  return (
    <>
      <Image src={`${process.env.NEXT_PUBLIC_HOST}${url}`} />
    </>
  );
}

export default Device;
