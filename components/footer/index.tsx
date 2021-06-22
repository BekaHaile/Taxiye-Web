import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterHeader = styled("h4")`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin: 20px 0px;
`;

const Image = styled("img")`
  margin-right:25px;
`;
const LastImage = styled("img")`
  margin-right:0px;
`;

const FooterLink = styled.a`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
  margin: 10px 0px;
  && {
    :hover {
      color: #A02167;
    }
  }
`;

const FooterContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  margin-left: 130px;
`;

const FooterBottomLink = styled(FooterLink)`
  font-size: 14px;
  line-height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin:0px;
  margin-right: 40px;
`;

const FooterEndBottomLink = styled(FooterBottomLink)`
  margin-right: 0px;
`;

const FooterBottomLinkWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  padding-bottom:20px;
  padding-left:0px; 
`;

const FooterInfo = styled("div")`
display: flex;

`;

const SocialLinkWrapper = styled(FooterBottomLinkWrapper)`
  padding-bottom:0px;
`;

const Grid = styled("div")`
  display: flex;
  flex-direction: row;
  padding-bottom:20px;
  margin-left: auto;
  
`;

const Footer = styled("div")`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const FooterImage = styled('img')`
  width:450px;
  height:430px;
`;

const LinkWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-right:150px;
`;
const LinkEndWrapper = styled(LinkWrapper)`
 
  margin-right:0px;
`;


const FlexRow = styled("div")`
  display: flex;
  justify-content: space-between;
  padding:60px 60px 0px 60px;

`;

const FlexEnd = styled("div")`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  width: 60%;
  justify-content: space-around;
  align-self: flex-end;
`;

const FooterSection = () => {
  return (
    <Footer>
      <FlexRow>
        <FooterImage
          src={require("../../assets/images/footer-image.svg")}
          
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
            <FooterInfo>
            <FooterBottomLink>Terms & Conditions</FooterBottomLink>
            <FooterBottomLink>Privacy Policy</FooterBottomLink>
            <FooterBottomLink>{`© ${new Date().getFullYear()} Elnet Technologies plc.`}</FooterBottomLink>
            </FooterInfo>
            <SocialLinkWrapper>
              <Image
                src={require("../../assets/icons/facebook.svg")}
                
              />
              <Image
                src={require("../../assets/icons/twitter.svg")}
                
              />
              <LastImage
                src={require("../../assets/icons/instagram.svg")}
                
              />
            </SocialLinkWrapper>
          </FooterBottomLinkWrapper>
        </FooterContent>
      </FlexRow>
    </Footer>
  );
};

export default FooterSection;
