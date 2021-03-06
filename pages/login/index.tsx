import React from 'react';
import Login from '../../components/account/login';
import { gql } from '@apollo/client';
import client from "../../backend-client";
import DefaultErrorPage from 'next/error';

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
