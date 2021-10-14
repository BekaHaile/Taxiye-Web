import React, { useState } from "react";
import Article from "../../components/articles/single";
import Banner from "../../components/hero/";
import { useQuery } from "react-query";
import { SecondaryInputs } from "../../components/form/inputs";
import styled from "styled-components";
import Loading from "../../components/loading/";
import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../../backend-client";

const Container = styled("div")`
  width: 350px;
  height: 40px;
`;
const SecondaryInputsWithShadow = styled(SecondaryInputs)`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
`;

const query = gql`
  # This is query
  query PageLayout($locale: String!) {
    headerContent(locale: $locale) {
      link
      logo {
        url
      }
    }
    topHeaderMenus(locale: $locale) {
      text
      link
      key
    }
    headerMenus(locale: $locale) {
      text
      link
      key
    }
    footerContent(locale: $locale) {
      logo {
        url
      }
      floatButtonText
      floatButtonPhone
      link
    }
    footerMenus(locale: $locale) {
      header {
        text
        text
        link
        description
      }

      title
    }
    footerBottomLinks(locale: $locale) {
      text
      link
      description
    }
    downloadAppLinks(locale: $locale) {
      name
      link
      thumbnail {
        url
      }
    }
    socialMedias(locale: $locale) {
      name
      link
      logo {
        url
      }
    }
  }
`;

const getSearch = async (key) => {
  const { NEXT_PUBLIC_HOST } = process.env;
  const q = key.queryKey[1].content;
  const locale = key.queryKey[1].locale;
  if (q) {
    const res = await fetch(
      `${NEXT_PUBLIC_HOST}/articles/?featured=true&headerTitle_contains=${q}&_locale=${locale}`
    );
    return res.json();
  }
  const res = await fetch(
    `${NEXT_PUBLIC_HOST}/articles/?featured=true&_locale=${locale}`
  );
  return res.json();
};

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const { locale } = context;
    const { NEXT_PUBLIC_HOST } = process.env;
    const resArticlePage = await fetch(
      `${NEXT_PUBLIC_HOST}/article-page/?_locale=${locale}`
    );
    const articlePageData = await resArticlePage.json();
    const articleRes = await fetch(
      `${NEXT_PUBLIC_HOST}/articles/?article_id=${id}&_locale=${locale}`
    );
    const articlesData = await articleRes.json();
    const popularRes = await fetch(
      `${NEXT_PUBLIC_HOST}/articles/?featured=true&_locale=${locale}`
    );
    const popularArticlesData = await popularRes.json();
    const { data } = await client.query({
      query: query,
      variables: { locale: locale ? locale : "en" },
    });
    return {
      props: {
        articlePage: articlePageData,
        article: articlesData[0],
        populars: popularArticlesData,
        data: data,
      },
    };
  } catch (e) {
    return {
      props: {
        error: true,
      },
    };
  }
}

export default function articles({ articlePage, article, populars, error }) {
  const [searchText, setSearching] = useState("");
  const router = useRouter();
  const { data, status } = useQuery(
    ["articles", { content: searchText, locale: router?.locale }],
    getSearch,
    { initialData: populars }
  );

  if ((searchText != "" && status == "error") || error)
    return <DefaultErrorPage statusCode={404} />;
  else if (searchText != "" && status === "loading") return <Loading />;
  let hero = {
    background: articlePage.hero.background,
    title: `${article.headerTitle}`,
    subTitle: "",
    text: `${article.headerTitle}`,
  };

  const searchingComponent = (
    <SecondaryInputs
      id="location"
      shadow={true}
      placeholder="Search..."
      icon={require("../../assets/icons/search.svg")}
      onInput={(event) => {
        if (event.target.value == null || event.target.value == "") {
          setSearching("");
        } else if (event.key == "Enter") {
          setSearching(event.target.value);
        }
      }}
    />
  );

  return (
    <>
      <Banner hero={hero} children={null} />
      <Article
        article={article}
        popular={data}
        SearchingComponent={searchingComponent}
      />
    </>
  );
}
