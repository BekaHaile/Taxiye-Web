import React from "react";
import SupportSection from "../components/support";
import Banner from "../components/hero/";
import { gql } from "@apollo/client";
import client from "../backend-client";
import DefaultErrorPage from "next/error";

const query = gql`
  # This is query
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
    floatButtonPhone
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
    supportPage(locale: $locale) {
      hero {
        title
        subTitle
        background {
          url
        }
      }
      supportSectionTitle
      supportSectionSubTitle
    }
    supports(locale: $locale, sort: "created_at") {
      id
      title
      content
    }
  }
`;
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

const Support = ({ data, error }) => {
  if (error) return <DefaultErrorPage statusCode={404} />;
  return (
    <>
      <Banner hero={data?.supportPage?.hero} children={null} key="Support" />
      <SupportSection data={data.supports} />
    </>
  );
};

export default Support;
