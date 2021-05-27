import React, { useState } from 'react';
import ArticlesContent from '../../components/articles';
import styled from "styled-components";
import { SecondaryInputs } from "../../components/form/inputs";
import Banner from "../../components/hero/";
import DefaultErrorPage from 'next/error';
import Articles from "../../components/articles/normal/";
import Loading from "../../components/loading/";
import { useQuery } from "react-query";
import { Button } from "../../components/form/buttons/primary-button";

const CustomButton = styled(Button)`
  padding: 5px 20px;
`;
const GraySection = styled("div")`
background: #f9f9f9;
margin-top: -60px;
padding-bottom:60px;
text-align: center;
`;


const Container = styled("div")`

`;
const SearchContainer = styled("div")`
    width:400px;
    margin:auto;
`;
const NoContent = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
color: #000000;
text-align:center;
`;

export async function getServerSideProps() {
  try {
    const { NEXT_PUBLIC_HOST } = process.env;
    const resArticlePage = await fetch(`${NEXT_PUBLIC_HOST}/article-page`);
    const articlePageData = await resArticlePage.json();
    const featuredRes = await fetch(`${NEXT_PUBLIC_HOST}/articles/?featured=true`);
    const featuredArticlesData = await featuredRes.json();
    const unfeaturedRes = await fetch(`${NEXT_PUBLIC_HOST}/articles/?featured=false&_limit=${9}`);
    const unfeaturedArticlesData = await unfeaturedRes.json();
    return {
      props: {
        articlePage: articlePageData,
        featured: featuredArticlesData,
        unfeatured: unfeaturedArticlesData,
        articles: []
      },
    };
  }
  catch (e) {
    return {props: {
      error: true
    }
  }
  }
}

const getSearch = async (key) => {
  const { NEXT_PUBLIC_HOST } = process.env;
  const q = key.queryKey[1].content;
  if (q) {
    const res = await fetch(`${NEXT_PUBLIC_HOST}/articles?headerTitle_contains=${q}`);
    return res.json();
  }
  const res = await fetch(`${NEXT_PUBLIC_HOST}/articles`);
  return res.json();
}
const getMore = async (key) => {
  const { NEXT_PUBLIC_HOST } = process.env;
  const q = key.queryKey[1].content;
  if (q) {
    const res = await fetch(`${NEXT_PUBLIC_HOST}/articles?featured=false&_limit=${q}`);
    return res.json();
  }
  const res = await fetch(`${NEXT_PUBLIC_HOST}/articles?featured=false&_limit=9`);
  return res.json();
}

export default function articles({ articlePage, featured, unfeatured, articles, error }) {
  const [searchText, setSearching] = useState("");
  const [itemsToBeLoaded, setItemsToLoad] = useState(9);

  const { data: searchedData, status: searchStatus } = useQuery(['articles', { content: searchText }], getSearch, { initialData: articles });
  const { data: loadedItems, status: loadedItemsStatus } = useQuery(['articles', { content: itemsToBeLoaded }], getMore, { initialData: unfeatured });


  const children = <SearchContainer>
    <SecondaryInputs
      id="location"
      placeholder="Search..."
      icon={require("../../assets/icons/search.svg")}
      lists={[]}
      onInput={(event) => {
        if (event.target.value == null || event.target.value == "") {
          setSearching("");
        }
        else if (event.key == "Enter") {
          setSearching(event.target.value);
          document.getElementById("content-viewer").scrollIntoView();
        }
      }}
    />
  </SearchContainer>


  if (loadedItemsStatus === "error" || searchStatus == "error" || error)
    return <DefaultErrorPage statusCode={404} />

    
  else if (loadedItemsStatus === "loading" || searchStatus === "loading")
    return <Loading />


  return (
    <>
      <Banner hero={articlePage.hero} children={children} />
      <Container id="content-viewer">
        {
          searchText != "" ?

            <Articles articles={searchedData} />
            :
            <ArticlesContent featured={featured} unfeatured={loadedItems} />

        }
        <GraySection>
          {


            Array.isArray(searchedData) && !searchedData.length ?
              <NoContent>No content</NoContent> :
              Array.isArray(loadedItems) && loadedItems.length >= itemsToBeLoaded &&
              <CustomButton onClick={() => setItemsToLoad(itemsToBeLoaded * 2)}>Load More</CustomButton>


          }
        </GraySection>
      </Container>
    </>
  )

}
