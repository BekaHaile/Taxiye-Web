import React from 'react';
import Article from "../../components/articles/single";
import Banner from "../../components/hero/";
import { useRouter } from "next/router";
import { gql } from '@apollo/client';
import client from "../../backend-client";
import DefaultErrorPage from 'next/error'


const query = gql`
query ArticleQuery( $id: ID! ){
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
      article(id:$id ){
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
        body {
        ... on ComponentTextMedia{
          caption
          media {
            url
          }
          meta
          __typename
        }
        ... on ComponentTextQuote{
        content
        __typename
       }
        ... on ComponentTextParagraph{
          content
          __typename
        }
      }
    }
      
  }
`

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const { data } = await client.query({
      query: query,
      variables: { id: id },
    },
    );
    return {
      props: {
        data: data,
      },
    };
  } catch (e) {
    return { props: { error: true } };
  }
}

export default function articles({ data, error }) {
  if (error)
    return <DefaultErrorPage statusCode={404} />

  let hero = {
    background: data.articlePage.hero.background,
    title: `${data.article.header.title}`,
    subTitle: "",
    text: `${data.article.header.title}`,
  };

  return (
    <>
      <Banner hero={hero} children={null} />
      <Article article={data.article} featured={data.featured} />
    </>
  )

}