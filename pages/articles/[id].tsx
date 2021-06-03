import React, { useState } from 'react';
import Article from "../../components/articles/single";
import Banner from "../../components/hero/";
import { useQuery } from "react-query";
import { SecondaryInputs } from "../../components/form/inputs";
import styled from "styled-components";
import Loading from "../../components/loading/";
import DefaultErrorPage from 'next/error';


const Container = styled("div")`
width: 350px;
height:40px;
`;
const SecondaryInputsWithShadow = styled(SecondaryInputs)`
box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
`;


const getSearch = async (key) => {
  const { NEXT_PUBLIC_HOST } = process.env;
  const q = key.queryKey[1].content;
  if (q) {
    const res = await fetch(`${NEXT_PUBLIC_HOST}/articles/?featured=true&headerTitle_contains=${q}`);
    return res.json();
  }
  const res = await fetch(`${NEXT_PUBLIC_HOST}/articles/?featured=true`);
  return res.json();
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const { NEXT_PUBLIC_HOST } = process.env;
    const resArticlePage = await fetch(`${NEXT_PUBLIC_HOST}/article-page`);
    const articlePageData = await resArticlePage.json();
    const articleRes = await fetch(`${NEXT_PUBLIC_HOST}/articles/${id}`);
    const articlesData = await articleRes.json();
    const popularRes = await fetch(`${NEXT_PUBLIC_HOST}/articles/?featured=true`);
    const popularArticlesData = await popularRes.json();
    return {
      props: {
        articlePage: articlePageData,
        article: articlesData,
        populars: popularArticlesData
      },
    };
  } catch (e) {
    return {
      props: {
        error:true
      },
    };
  }
}


export default function articles({ articlePage, article, populars, error }) {
  const [searchText, setSearching] = useState("");
  const { data, status } = useQuery(['articles', { content: searchText }], getSearch, { initialData: populars });
  
  
  if ((searchText != "" && status == "error")|| error)
    return <DefaultErrorPage statusCode={404} />
  else if (searchText != "" && status === "loading")
    return <Loading />
  let hero = {
    background: articlePage.hero.background,
    title: `${article.headerTitle}`,
    subTitle: "",
    text: `${article.headeeTitle}`,
  };

  const searchingComponent = <SecondaryInputs
    id="location"
    shadow={true}
    placeholder="Search..."
    icon={require("../../assets/icons/search.svg")}
    onInput={(event) => {
      if (event.target.value == null || event.target.value == "") {
        setSearching("");
      }
      else if (event.key == "Enter") {
        setSearching(event.target.value);
      }


    }}
  />


  return (
    <>
      <Banner hero={hero} children={null} />
      <Article article={article} popular={data} SearchingComponent={searchingComponent} />
    </>
  )

}