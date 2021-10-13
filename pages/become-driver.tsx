import React from "react";
import Signup from "../components/become-driver";
import styled from "styled-components";
import Link from "next/link";
import Banner from "../components/hero";
import { gql } from "@apollo/client";
import client from "../backend-client";
import DefaultErrorPage from "next/error";
import theme from "../theme/main";

const query = gql`
  query PageLayout($locale: String!) {
  headerContent(locale: $locale) {
      link
      logo {
        url
      }
    }
    topHeaderMenus(locale: $locale) {
      text
      link
      key
    }
    headerMenus(locale: $locale) {
      text
      link
      key
    }
  footerContent(locale: $locale){
    logo{
      url
    }
    floatButtonText
    link
  }
  footerMenus(locale: $locale){
    header{
      text
      text
      link
      description
    }
    
    title
  }
  footerBottomLinks(locale: $locale){
    text
    link
    description
  }
  downloadAppLinks(locale: $locale){
    name
    link
    thumbnail{
      url
    }
  }
  socialMedias(locale: $locale){
    name
    link
    logo{
      url
    }
  }
    becomeADriverPage(locale: $locale) {
      hero {
        title
        subTitle
        background {
          url
        }
      }
      workFreedomSectionTitle
      workFreedomSectionSubTitle
      requirmentSectionTitle
      requirmentSectionSubTitle
      requirmentsMainImage {
        url
      }
      safetySectionTitle
      safetySectionSubTitle
      getStartedSectionTitle
    }
    driverWorkFreedoms(locale: $locale) {
      id
      title
      description
      thumbnail {
        url
      }
    }
    driverRequirments(locale: $locale) {
      id
      title
      description
      thumbnail {
        url
      }
    }
    driverSafeties(locale: $locale) {
      id
      title
      subTitle
      thumbnail {
        url
      }
    }
  }
`;

const SloganButton = styled("button")`
  background: ${theme.colors.primary};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 20px;
  line-height: 19px;
  text-align: center;
  color: ${theme.colors.white};
  border-color: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;

// const children = <Link href="/signup/driver">
//   <SloganButton>Get started</SloganButton>
// </Link>
const children = <SloganButton>Get started</SloganButton>;
export async function getServerSideProps(context) {
  const { locale } = context;
  try {
    const { data, error } = await client.query({
      query: query,
      variables:{locale: locale}
    });
    return {
      props: {
        data: data,
      },
    };
  } catch (e) {
    return { props: { error: true } };
  }
}

const signup = ({ data, error }) => {
  if (error) return <DefaultErrorPage statusCode={404} />;
  return (
    <>
      <Banner
        hero={data?.becomeADriverPage?.hero}
        children={children}
        key="become-driver"
      />
      <Signup data={data} />
    </>
  );
};

export default signup;
