import React from "react";
import SignupContent from "../../../components/account/signup/corporate";
import { gql } from "@apollo/client";
import client from "../../../backend-client";
import DefaultErrorPage from "next/error";

const query = gql`
  query PageLayout($locale: String!) {
    corporateSignUpPage(locale: $locale) {
      hero {
        title
        background {
          url
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
  return <DefaultErrorPage statusCode={404} />;
  if (error) return <DefaultErrorPage statusCode={404} />;
  return <SignupContent hero={data.corporateSignUpPage.hero} />;
};

export default signup;
