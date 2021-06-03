import React from 'react';
import SignupContent from '../../../components/account/signup/corporate';
import { gql } from '@apollo/client';
import client from "../../../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
query{
    corporateSignUpPage{
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
        data: data
      },
    };
  } catch (e) {
    return {props:{error:true}};
  }
}

const signup = ({data, error}) => {
    if (error)
    return <DefaultErrorPage statusCode={404} />
    return <SignupContent hero={data.corporateSignUpPage.hero}/>;
}

export default signup;