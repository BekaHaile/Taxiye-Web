import React from "react";
import SupportSection from "../components/support";
import Banner from "../components/hero/";
import { gql } from "@apollo/client";
import client from "../backend-client";
import DefaultErrorPage from "next/error";

const query = gql`
  # This is query
  query PageLayout($locale: String!) {
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
