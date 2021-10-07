import React from 'react';
import Login from '../../components/account/login';
import { gql } from '@apollo/client';
import client from "../../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
query PageLayout($locale: String!) {
    loginPage (locale: $locale){
      hero{
        title
        background{
          url
        }
      }
    }
  }
`
export async function getServerSideProps(context) {
  const { locale } = context;
  try{
    const { data, error } = await client.query({
      query: query,
      variables:{locale: locale}
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
const login = ({data, error}) => {
    if (error)
    return <DefaultErrorPage statusCode={404} />
    return <Login hero={data.loginPage.hero}/>;
}

export default login;
