import React, { useEffect } from "react";
import LandingContent from "../components/landing";
import Banner from "../components/hero/landing-hero";
import { gql } from "@apollo/client";
import client from "../backend-client";
import DefaultErrorPage from "next/error";


const query = gql`
  # This is query
  query PageLayout($locale: String!) {
    homePage (locale: $locale) {
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

  const {locale} = context;
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

export default function index({ data, error }) {

  if (error) return <DefaultErrorPage statusCode={404} />;

  return (
    <>
      <Banner hero={data?.homePage?.hero} />
      <LandingContent data={data} />
    </>
  );
}
