import React from "react";
import ContactUsContent from '../components/contact-us';
import Banner from "../components/hero";
import { gql } from '@apollo/client';
import client from "../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
query{
  contactUsPage{
   
    hero{
      title
      subTitle
      background{
        url
      }
    }
    contactUsSectionTitle
    contactUsSectionSubTitle
    officesSectionTitle
    officesSectionSubTitle
  }

  socialMedias{
    id
    name
    logo{
      url
    }
    link
  }
  addresses{
    id
    name
    lat
    lng
    openHours{
      header
      content{
        title
        description
      }
    }
    contactCenter{
      header
      content{
        title
        description
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

const Contactus = ({data, error}) => {
  if (error)
  return <DefaultErrorPage statusCode={404} />
  return (
    <>
      <Banner hero={data.contactUsPage.hero} children={null} key="contact-us"/>
      <ContactUsContent
      socialMedias={data.socialMedias}
      officeTitle={data.contactUsPage.officesSectionTitle}
      officeSubTitle={data.contactUsPage.officesSectionSubTitle}
      contactUsTitle={data.contactUsPage.contactUsSectionTitle}
      contactUsSubTitle={data.contactUsPage.contactUsSectionSubTitle} 
      addresses={data.addresses}/>
    </>
  )

};

export default Contactus;
