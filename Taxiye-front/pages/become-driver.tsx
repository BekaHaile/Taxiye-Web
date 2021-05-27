import React from 'react';
import Signup from '../components/become-driver';
import styled from "styled-components";
import Link from "next/link";
import Banner from "../components/hero";
import { gql } from '@apollo/client';
import client from "../backend-client";
import DefaultErrorPage from 'next/error';

const query = gql`
query{
  becomeADriverPage{
    hero{
      title
      subTitle
      background{
      url
    }
    }
    workFreedomSectionTitle
    workFreedomSectionSubTitle
    requirmentSectionTitle
    requirmentSectionSubTitle
    requirmentsMainImage{
      url
    }
    safetySectionTitle
    safetySectionSubTitle
    getStartedSectionTitle
    
  }
  driverWorkFreedoms{
    id
    title
    description
    thumbnail{
      url
    }
  }
  driverRequirments{
    id
    title
    description
    thumbnail{
      url
    }
  }
  driverSafeties{
    id
    title
    subTitle
    thumbnail{
      url
    }
  }
  
}
`

const SloganButton = styled("button")`
background: #A02167;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding: 5px 20px;
line-height: 19px;
text-align: center;
color: #ffffff;
border-color: transparent;
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
text-align: center;
`;

const children = <Link href="/signup/driver">
  <SloganButton>Get started</SloganButton>
</Link>
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
  return (
    <>
      <Banner hero={data.becomeADriverPage.hero} children={children} />
      <Signup data={data} />
    </>
  )
}

export default signup;