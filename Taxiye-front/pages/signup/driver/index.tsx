import React from 'react';
import SignupContent from '../../../components/account/signup/driver';
import { gql } from '@apollo/client';
import client from "../../../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
query{
  driverSignUpPage{
      hero{
        title
        background{
          url
        }
      }
    }
  }
`
export async function getServerSideProps() {
  try{
    const { data, error } = await client.query({
      query: query
    });
    return {
      props: {
        data: data,
        error:error
      },
    };
  } catch (e) {
    return {props:{error:true}};
  }
}
const signup = ({data, error}) => {
  if (error)
  return <DefaultErrorPage statusCode={404} />
  return <SignupContent hero={data.driverSignUpPage.hero} />;
}

export default signup;