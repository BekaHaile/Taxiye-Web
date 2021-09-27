import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme/main";
import { ShareSocial } from "react-share-social";
import Modal from "../modal/secondary";

const Container = styled("div")`
  background: ${theme.colors.topHeaderColor};
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0px 60px;
  flex-wrap:wrap;
  @media (max-width: 768px) {
    height: auto;
    justify-content: start;
    padding: 0px 20px;
  }
`;


const FormattedLinks = styled.a`
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #ababab;
  text-decoration: none;
  padding: 5px;
  &:after {
    margin-left: 10px;
    content: "";
    border: 1px solid #ababab;
  }
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const CornerLink = styled(FormattedLinks)`
  &:after {
    border: none;
  }
`;

const TopBar = () => {
  const [show, setShow] = useState(false);
  const [siteUrl, setSiteUrl] = useState("");
  useEffect(() => {
    let urlLInk = window.location.href;
    setSiteUrl(urlLInk);
  }, []);
  return (
    <Container>
      <div
        onClick={() => {
          const element = document.querySelector("#download-app-links");
          const topPos =
            element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: topPos, // scroll so that the element is at the top of the view
            behavior: "smooth", // smooth scroll
          });
        }}
      >
        <FormattedLinks>Download App </FormattedLinks>
      </div>
      <a href="https://elsabi.net/" target="_blank">
        <FormattedLinks>EI Sabi</FormattedLinks>
      </a>
      <div onClick={() => setShow(true)}>
        <FormattedLinks>Share</FormattedLinks>
      </div>
      <Link href="support">
        <FormattedLinks>Support</FormattedLinks>
      </Link>
      <Link href="#">
        <CornerLink>Call Us On 6055</CornerLink>
      </Link>
      <Modal onClose={() => setShow(false)} show={show}>
        <ShareSocial
          url={siteUrl}
          socialTypes={["facebook", "twitter", "reddit", "linkedin", "email"]}
        />
      </Modal>
    </Container>
  );
};

export default TopBar;
