import React, { Children } from 'react';
import ArticlesContent from '../../components/articles';
import styled from "styled-components";
import { SecondaryInputs } from "../../components/form/inputs";
import Banner from "../../components/hero/";
import { gql } from '@apollo/client';
import client from "../../backend-client";
import DefaultErrorPage from 'next/error';


const SearchContainer = styled("div")`
    width:400px;
    margin:auto;
`;

const children = <SearchContainer>
    <SecondaryInputs
        id="location"
        placeholder="Search..."
        icon={require("../../assets/icons/search.svg")}
    />
</SearchContainer>



const query = gql`
# Write your query or mutation here
query {
  	articlePage{
      hero{
        title
        subTitle
        background{
          url
        }
      }
    }
    featured: articles(sort: "created_at" ,where: {featured:true}){
    id
    published_at
    featured
    header{
    	title
    	subTitle
        longSubTitle
    	thumbnail{
      	url
    	}
        mainMedia{
            url
        }
      
    }
    
  }
  unfeatured: articles(sort: "created_at" ,where: {featured:false}, limit:9){
    id
    published_at
    featured
    header{
    	title
    	subTitle
        longSubTitle
    	thumbnail{
      	url
    	}
        mainMedia{
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

export default function articles({data, error}) {
    if (error)
    return <DefaultErrorPage statusCode={404} />
    return (
        <>
            <Banner hero={data.articlePage.hero} children={children}/>
            <ArticlesContent featured={data.featured} unfeatured={data.unfeatured}/>
        </>
    )

}
