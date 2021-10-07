import React from "react";
import ServicesSection from '../components/services';
import Banner from "../components/hero/";
import { gql } from '@apollo/client';
import client from "../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
# This is query
query PageLayout($locale: String!) {
  servicePage (locale: $locale){
    hero{
      title
      subTitle
      background{
        url
      }
    }
    serviceSectionTitle
    serviceSectionSubTitle
    
  }
  services(locale: $locale, sort: "created_at" ){
    id
    name
    shortDescription{
      content
    }
    longDescription{
      content
    }
    thumbnail{
      url
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



const Services = ({data, error}) => {
  if (error)
  return <DefaultErrorPage statusCode={404} />
  return (
  <>
  <Banner hero={data?.servicePage?.hero} children={null} key="services"/>
  <ServicesSection data={data}/>
  </>
  )
};

export default Services;