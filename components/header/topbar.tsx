import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled("div")`
  background: #272727;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0px 60px;
`;

const FormattedLinks = styled.a`
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #ababab;
  text-decoration: none;
  padding: 5px 20px 5px 20px;
  border-right: 1px solid #ababab;
`;

const CornerLink = styled(FormattedLinks)`
border: none;
`;

const TopBar = () => {
  return (
    <Container>
      <Link href="#">
        <FormattedLinks>Download App </FormattedLinks>
      </Link>
      <Link href="#">
        <FormattedLinks>EI Sabi</FormattedLinks>
      </Link>
      <Link href="#">
        <FormattedLinks>EI Foundation</FormattedLinks>
      </Link>
      <Link href="#">
        <FormattedLinks>Share</FormattedLinks>
      </Link>
      <Link href="#">
        <FormattedLinks>Offers</FormattedLinks>
      </Link>
      <Link href="#">
        <FormattedLinks>Support</FormattedLinks>
      </Link>
      <Link href="#">
        <FormattedLinks>Call Us On 6055</FormattedLinks>
      </Link>
      <Link href="#">
        <CornerLink>Login</CornerLink>
      </Link>
    </Container>
  );
};

export default TopBar;
