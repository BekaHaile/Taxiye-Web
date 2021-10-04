import React from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme/main";

const FooterHeader = styled("h4")`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin: 20px 0px;
`;

const Image = styled("img")``;
const DownloadImage = styled("img")`
  width: 170px;
  height: 51px;
  @media (max-width: 300px) {
    width:100%;
    height:auto;
  }
`;
const LinkComponent = styled("a")``;

const LastImage = styled("img")`
  margin-right: 0px;
`;

const FooterLink = styled.a`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.primaryTextColor};
  margin: 10px 0px;
  && {
    :hover {
      color: ${theme.colors.primary};
    }
  }
`;

const FooterContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
`;

const FooterBottomLink = styled(FooterLink)`
  font-size: 14px;
  line-height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

const FooterEndBottomLink = styled(FooterBottomLink)`
  margin-right: 0px;
`;

const FooterBottomLinkWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: flex-end;
  padding-bottom: 20px;
  padding-left: 0px;
  gap: 10px;
`;

const FooterInfo = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SocialLinkWrapper = styled(FooterBottomLinkWrapper)`
  padding-bottom: 0px;
  gap: 10px;
`;

const Grid = styled("div")`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  margin-left: auto;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const Footer = styled("div")`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.footerColor};
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const FooterImage = styled("img")`
  /*width:450px;
  height:430px;*/
  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;

const LinkWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;
const LinkEndWrapper = styled(LinkWrapper)`
  margin-right: 0px;
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 60px 60px 0px 60px;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 0px;
    padding-top: 60px;
    flex-wrap: wrap;
  }
`;

const FlexEnd = styled("div")`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  justify-content: space-around;
  align-self: flex-end;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const FooterSection = () => {
  return (
    <Footer>
      <FlexRow>
        <FooterImage src={require("../../assets/images/footer-image.svg")} />
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
              <Link href="/contact-us">
                <FooterLink>Offices</FooterLink>
              </Link>
              <Link href="/contact-us">
                <FooterLink>Contact us</FooterLink>
              </Link>
              <Link href="/about-us">
                <FooterLink>About us</FooterLink>
              </Link>
              <Link href="/articles">
                <FooterLink>Jobs</FooterLink>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <FooterHeader>Driver</FooterHeader>
              <Link href="/signup/driver">
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
            <LinkEndWrapper>
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
            </LinkEndWrapper>
          </Grid>
          <FlexEnd id="download-app-links">
            <LinkComponent href="https://itunes.apple.com/us/app/taxiye-passenger/id1455202776?mt=8">
              <DownloadImage
                src={require("../../assets/images/app_store.png")}
              />
            </LinkComponent>
            <LinkComponent href="https://play.google.com/store/apps/details?id=com.taxiye">
              <DownloadImage
                src={require("../../assets/images/play_store.png")}
              />
            </LinkComponent>
          </FlexEnd>
          <FooterBottomLinkWrapper>
            <FooterInfo>
              <FooterBottomLink>Terms & Conditions</FooterBottomLink>
              <FooterBottomLink>Privacy Policy</FooterBottomLink>
              <FooterBottomLink>{`© ${new Date().getFullYear()} Elnet Technologies plc.`}</FooterBottomLink>
            </FooterInfo>
            <SocialLinkWrapper>
              <Image src={require("../../assets/icons/facebook.svg")} />
              <Image src={require("../../assets/icons/twitter.svg")} />
              <LastImage src={require("../../assets/icons/instagram.svg")} />
            </SocialLinkWrapper>
          </FooterBottomLinkWrapper>
        </FooterContent>
      </FlexRow>
    </Footer>
  );
};

export default FooterSection;
