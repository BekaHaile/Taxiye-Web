import React from "react";
import AboutUsContent from "../components/about-us";
import Banner from "../components/hero";
import { gql } from "@apollo/client";
import client from "../backend-client";
import DefaultErrorPage from "next/error";

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
    aboutUsPage (locale: $locale){
      id
      hero {
        title
        subTitle
        background {
          url
        }
      }

      aboutUsSectionTitle
      aboutUsSectionDescription {
        content
      }
      aboutUsSectionPrimaryImage {
        url
      }
      aboutUsSectionSecondaryImage {
        url
      }
      whyUsSectionTitle
      whyUsSectionSubTitle
      whyAsMainImage {
        url
      }
      ourPartnersSectionTitle
      ourPartnersSectionSubTitle
      ourPartnersSectionDescription
      ourTeamSectionTitle
      ourTeamSectionSubTitle
    }

    ourValueStatements(locale: $locale) {
      id
      title
      description
      thumbnail {
        url
      }
    }

    whyTaxiyes(locale: $locale) {
      id
      title
      description
    }

    ourPartners(locale: $locale) {
      id
      description
      thumbnail {
        url
      }
    }

    ourTeams(locale: $locale) {
      id
      name
      title
      profile {
        url
      }
    }
    ourTeamGroups(locale: $locale) {
      id
      team
      description
      image {
        url
      }
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
const aboutus = ({ data, error }) => {
  if (error) return <DefaultErrorPage statusCode={404} />;
  return (
    <>
      <Banner hero={data?.aboutUsPage?.hero} children={null} />
      <AboutUsContent data={data} />
    </>
  );
};

export default aboutus;
