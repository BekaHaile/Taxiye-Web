import React from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme/main";
import zIndex from "@material-ui/core/styles/zIndex";

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
    width: 100%;
    height: auto;
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

const FooterSection = ({ data }) => {
  return (
    <Footer>
      <FlexRow>
        <FooterImage
          src={`${process.env.NEXT_PUBLIC_HOST}${data?.footerContent?.logo?.url}`}
        />
        <FooterContent>
          <Grid>
            {data?.footerMenus?.map((menu_item, index) => {
              return (
                <LinkWrapper key={index}>
                  <FooterHeader>{menu_item?.title}</FooterHeader>
                  {menu_item?.header?.map((item, key) => (
                    <Link href={item?.link ?? ""} key={key}>
                      <FooterLink>{item?.text}</FooterLink>
                    </Link>
                  ))}
                </LinkWrapper>
              );
            })}
          </Grid>
          <FlexEnd id="download-app-links">
            {data?.downloadAppLinks?.map((content, index) => {
              return (
                <LinkComponent key={index} href={content?.link ?? ""}>
                  <DownloadImage
                    src={`${process.env.NEXT_PUBLIC_HOST}${content?.thumbnail?.url}`}
                  />
                </LinkComponent>
              );
            })}

          </FlexEnd>
          <FooterBottomLinkWrapper>
            <FooterInfo>
              {data?.footerBottomLinks?.map((content, index) => {
                return (
                  <FooterBottomLink href={content?.link ?? ""} key={index}>
                    {content?.text}
                  </FooterBottomLink>
                );
              })}
            </FooterInfo>
            <SocialLinkWrapper>
            {data?.socialMedias?.map((content, index) => {
                return (
                  <FooterBottomLink href={content?.link ?? ""} key={index}>
                  <Image src={`${process.env.NEXT_PUBLIC_HOST}${content?.logo?.url}`} />
                  </FooterBottomLink>
                );
              })}
            </SocialLinkWrapper>
          </FooterBottomLinkWrapper>
        </FooterContent>
      </FlexRow>
    </Footer>
  );
};

export default FooterSection;
