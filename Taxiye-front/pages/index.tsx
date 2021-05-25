import React from 'react';
import LandingContent from '../components/landing';
import Banner from "../components/hero/landing-hero";
import { gql } from '@apollo/client';
import client from "../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
# Write your query or mutation here
query {
  homePage {
    hero{
      title
      subTitle
      background{
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
  
    articles(sort: "created_at" ){
    id
    published_at
    featured
    header{
    	title
    	subTitle
    	thumbnail{
      	url
    	}
      
    }
  }
  testimonies(sort: "created_at" ){
  	id
    profileImage{
      url
    }
  	fullName
    position
    testimony
    rating
  }
    fleets(sort: "created_at" ){
  	id
    name
    description
    speed
  	image{
      url
    }
  }
}
`

export async function getServerSideProps() {
  try {
    const { data, error } = await client.query({
      query: query
    });
    return {
      props: {
        data: data,
        error: error
      },
    };
  } catch (e) {
    return {props:{error:true}};
  }
}


export default function index({ data, error }) {
  if (error)
    return  <DefaultErrorPage statusCode={404} />

  return (
    <>
      <Banner hero={data.homePage.hero} />
      <LandingContent data={data} />;
    </>
  )
}
