import React from 'react';
import AboutUsContent from '../components/about-us';
import Banner from "../components/hero";
import { gql } from '@apollo/client';
import client from "../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
query{
  aboutUsPage{
    id
    hero{
      title
      subTitle
      background{
        url
      }
    }
    
    aboutUsSectionTitle
    aboutUsSectionDescription{
      content
    }
    aboutUsSectionPrimaryImage{
      url
    }
    aboutUsSectionSecondaryImage{
      url
    }
    whyUsSectionTitle
    whyUsSectionSubTitle
    whyAsMainImage{
      url
    }
    ourPartnersSectionTitle
    ourPartnersSectionSubTitle
    ourPartnersSectionDescription
    ourTeamSectionTitle
    ourTeamSectionSubTitle
  }
  
  ourValueStatements{
    id
    title
    description
    thumbnail{
      url
    }
  }
  
  whyTaxiyes{
    id
    title
    description
  }
  
  ourPartners{
    id
    description
    thumbnail{
      url
    }
  }
  
  ourTeams{
    id
    name
    title
    profile{
      url
    }
  }
  ourTeamGroups{
    id
    team
    description
    image{
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
        data: data,
        error:error
      },
    };
  } catch (e) {
    return {props:{error:true}};
  }
}
const aboutus = ({data, error}) => {
    if (error)
    return <DefaultErrorPage statusCode={404} />
    return (
        <>
            <Banner hero={data.aboutUsPage.hero} children={null}/>
            <AboutUsContent data={data}/>
        </>
    )
}

export default aboutus;