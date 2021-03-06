import React from "react";
import styled from "styled-components";
import Link from "next/link";
import theme from "../../../../theme/main";

const Container = styled("div")`
  text-align: center;
  padding-top: 30px;
`;

const CustomLink = styled("a")`
  color: ${theme.colors.primary};
`;

const Figure = styled("figure")`
  display: inline-block;
  margin: 0px;
`;
const Caption = styled("figcaption")`
  width: 540px;
  font-family: Open Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #2a2a2a;
  text-align: start;
  padding: 10px 20px 0px 20px;
  &:before {
    content: "";
    height: 31px;
    width: 1px;
    background-color: #c31815;
    position: absolute;
    margin-left: -10px;
    transform: translate(-50%, 50%);
  }
  @media (max-width: 540px) {
    width:100%;
  }
`;

const Image = styled("img")`
  width: 560px;
  @media (max-width: 560px) {
    width: 100%;
  }
  /*height: 319px;*/
`;

const Quote = ({ media }) => {
  return (
    <>
      <Container>
        <Figure>
          <Image src={`${process.env.NEXT_PUBLIC_HOST}${media?.media?.url}`} />
          <Caption>
            {media?.caption}
            <CustomLink href="/">{media?.meta}</CustomLink>
          </Caption>
        </Figure>
      </Container>
    </>
  );
};

export default Quote;
