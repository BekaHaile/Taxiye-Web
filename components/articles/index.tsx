import React from "react";
import FeaturedContent from "./featured";
import NormalArticleContent from "./normal";
import styled from "styled-components";

const FeaturedContentView = styled(FeaturedContent)``;

const FeaturedContentMobileView = styled(NormalArticleContent)``;

const ArticlesContent = ({ featured, unfeatured }) => {
  return (
    <>
      <div>
        <div className="desktop-article-view">
          <FeaturedContentView featured={featured}></FeaturedContentView>
        </div>
        <div className="mobile-article-view">
          <FeaturedContentMobileView
            title="Featured"
            articles={featured}
          ></FeaturedContentMobileView>
        </div>
        <NormalArticleContent
          title="All Articles"
          articles={unfeatured}
        ></NormalArticleContent>
      </div>
    </>
  );
};

export default ArticlesContent;
