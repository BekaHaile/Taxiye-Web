import React from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme/main";

const Container = styled("div")`
  background: ${theme.colors.topHeaderColor};
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
  padding: 5px;
  &:after {
    margin-left:10px;
    content:"";
    border: 1px solid #ababab;
   
  }
  &:hover {
    color: ${theme.colors.primary};
  }
`;


const CornerLink = styled(FormattedLinks)`
&:after{
  border: none;
}

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
        <CornerLink>Call Us On 6055</CornerLink>
      </Link>
    </Container>
  );
};

export default TopBar;
