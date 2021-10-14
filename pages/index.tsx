import React, { useEffect } from "react";
import LandingContent from "../components/landing";
import Banner from "../components/hero/landing-hero";
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
    homePage(locale: $locale) {
      hero {
        title
        subTitle
        background {
          url
        }
      }
      serviceSectionTitle
      serviceSectionSubTitle
      testimonySectionTitle
      testimonySectionSubTitle
      fleetSectionTitle
      fleetSectionSubTitle
      articleSectionTitle
      articleSectionSubTitle
    }
    services(locale: $locale, sort: "created_at") {
      id
      name
      shortDescription {
        content
      }
      longDescription {
        content
      }
      thumbnail {
        url
      }
    }

    articles(locale: $locale, sort: "created_at", where: { featured: true }) {
      id
      published_at
      article_id
      user {
        firstname
        lastname
      }
      featured
      headerTitle
      headerSubTitle
      thumbnail {
        url
      }
    }
    testimonies(locale: $locale, sort: "created_at") {
      id
      profileImage {
        url
      }
      fullName
      position
      testimony
      rating
    }
    fleets(locale: $locale, sort: "created_at") {
      id
      name
      description
      speed
      image {
        url
      }
    }
  }
`;

export async function getServerSideProps(context) {
  const { locale } = context;
  // console.log(context);
  try {
    const { data, error } = await client.query({
      query: query,
      variables: { locale: locale ? locale : "en" },
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

export default function index({ data, error }) {
  if (error)
    return <DefaultErrorPage className="error-page" statusCode={404} />;

  return (
    <>
      <Banner hero={data?.homePage?.hero} />
      <LandingContent data={data} />
    </>
  );
}
