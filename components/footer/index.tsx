import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const FooterHeader = styled("h4")`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin: 20px 0px;
`;

const FooterLink = styled.a`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
  margin: 10px 0px;
  && {
    :hover {
      color: #e45397;
    }
  }
`;

const FooterContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  margin: 20px 0px;
`;

const FooterBottomLink = styled(FooterLink)`
  font-size: 14px;
  line-height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 40px;
`;

const FooterBottomLinkWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  width: 120%;
`;

const SocialLinkWrapper = styled(FooterBottomLinkWrapper)`
  width: 20%;
`;

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 200px;
  grid-auto-rows: minmax(200px, auto);
  grid-column: 3;
`;

const Footer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 60px 60px 0px;
  background: #ffffff;
`;

const FooterImage = styled(Image)`
  margin-top: 25px;
  padding: 0;
`;

const LinkWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FlexEnd = styled("div")`
  display: flex;
  align-items: flex-end;
  margin: 20px 0px;
  width: 60%;
  justify-content: space-around;
  align-self: flex-end;
`;

const FooterSection = () => {
  return (
    <Footer>
      <FlexRow>
        <FooterImage
          src={require("../../assets/images/footer_app_img.png")}
          width="450px"
          height="430px"
        />
        <FooterContent>
          <Grid>
            <LinkWrapper>
              <FooterHeader>Taxiye</FooterHeader>
              <Link href="/services">
                <FooterLink>Services</FooterLink>
              </Link>
              <Link href="/corporate">
                <FooterLink>Corporate</FooterLink>
              </Link>
              <Link href="/offices">
                <FooterLink>Offices</FooterLink>
              </Link>
              <Link href="/contact">
                <FooterLink>Contact us</FooterLink>
              </Link>
              <Link href="/about">
                <FooterLink>About us</FooterLink>
              </Link>
              <Link href="/jobs">
                <FooterLink>Jobs</FooterLink>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <FooterHeader>Driver</FooterHeader>
              <Link href="#">
                <FooterLink>Become a driver</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Safety</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Requirements</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Insurance</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Bonus</FooterLink>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <FooterHeader>Passenger</FooterHeader>
              <Link href="#">
                <FooterLink>Call a taxi</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Share a taxi</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Safety</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Rewards</FooterLink>
              </Link>
              <Link href="#">
                <FooterLink>Help</FooterLink>
              </Link>
            </LinkWrapper>
          </Grid>
          <FlexEnd>
            <Image
              src={require("../../assets/images/app_store.png")}
              width="170px"
              height="51px"
            />
            <Image
              src={require("../../assets/images/play_store.png")}
              width="170px"
              height="51px"
            />
          </FlexEnd>
          <FooterBottomLinkWrapper>
            <FooterBottomLink>Terms & Conditions</FooterBottomLink>
            <FooterBottomLink>Privacy Policy</FooterBottomLink>
            <FooterBottomLink>{`© ${new Date().getFullYear()} Elnet Technologies plc.`}</FooterBottomLink>
            <SocialLinkWrapper>
              <Image
                src={require("../../assets/icons/facebook.png")}
                width="11px"
                height="21px"
              />
              <Image
                src={require("../../assets/icons/twitter.png")}
                width="11px"
                height="21px"
              />
              <Image
                src={require("../../assets/icons/instagram.png")}
                width="11px"
                height="21px"
              />
            </SocialLinkWrapper>
          </FooterBottomLinkWrapper>
        </FooterContent>
      </FlexRow>
    </Footer>
  );
};

export default FooterSection;
