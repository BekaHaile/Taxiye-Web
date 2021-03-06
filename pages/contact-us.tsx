import React from "react";
import ContactUsContent from "../components/contact-us";
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
    footerContent(locale: $locale) {
      logo {
        url
      }
      floatButtonText
      floatButtonPhone
      link
    }
    footerMenus(locale: $locale) {
      header {
        text
        text
        link
        description
      }

      title
    }
    footerBottomLinks(locale: $locale) {
      text
      link
      description
    }
    downloadAppLinks(locale: $locale) {
      name
      link
      thumbnail {
        url
      }
    }
    socialMedias(locale: $locale) {
      name
      link
      logo {
        url
      }
    }
    contactUsPage(locale: $locale) {
      hero {
        title
        subTitle
        background {
          url
        }
      }
      contactUsSectionTitle
      contactUsSectionSubTitle
      officesSectionTitle
      officesSectionSubTitle
      getDirectionButton{
        text
      }
      contactUsForm {
        label
        placeHolder
      }
      continueButton{
        text
      }
    }

    socialMedias(locale: $locale) {
      id
      name
      logo {
        url
      }
      link
    }
    addresses(locale: $locale) {
      id
      name
      lat
      lng
      openHours {
        header
        content {
          title
          description
        }
      }
      contactCenter {
        header
        content {
          title
          description
        }
      }
    }
  }
`;
export async function getServerSideProps(context) {
  const { locale } = context;
  try {
    const { data, error } = await client.query({
      query: query,
      variables: { locale: locale },
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

const Contactus = ({ data, error }) => {
  if (error) return <DefaultErrorPage statusCode={404} />;
  return (
    <>
      <Banner
        hero={data?.contactUsPage?.hero}
        children={null}
        key="contact-us"
      />
      <ContactUsContent
        socialMedias={data?.socialMedias}
        officeTitle={data?.contactUsPage?.officesSectionTitle}
        officeSubTitle={data?.contactUsPage?.officesSectionSubTitle}
        contactUsTitle={data?.contactUsPage?.contactUsSectionTitle}
        contactUsSubTitle={data?.contactUsPage?.contactUsSectionSubTitle}
        addresses={data?.addresses}
        getDirectionButton={data?.contactUsPage?.getDirectionButton}
        contactUsContent={data?.contactUsPage}
      />
    </>
  );
};

export default Contactus;
