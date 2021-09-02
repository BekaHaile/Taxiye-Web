import React from "react";
import ServicesSection from '../components/services';
import Banner from "../components/hero/";
import { gql } from '@apollo/client';
import client from "../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
# This is query
query {
  servicePage {
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
  services(sort: "created_at" ){
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



const Services = ({data, error}) => {
  if (error)
  return <DefaultErrorPage statusCode={404} />
  return (
  <>
  <Banner hero={data.servicePage.hero} children={null}/>
  <ServicesSection data={data}/>
  </>
  )
};

export default Services;