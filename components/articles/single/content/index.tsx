import React from "react";
import styled from "styled-components";
import Header from "./header";
import ParagraphText from "./paragraph-text";
import Quote from "./quote";
import Media from "./media";

const Container = styled("div")`
  flex: 1;
`;

const InnerContainer = styled("div")`
  max-width: 836px;
  margin: auto;
  @media (max-width: 768px) {
    width:auto;
  }
`;

const Article = ({ article }) => {
  const articleBody = article.body;
  const articleHeader = {
    title: article.headerTitle,
    mainMedia: {
      url: article.mainMedia.url,
    },
    published_at: article.published_at,
    user: article.user,
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <Header header={articleHeader} />
          {articleBody.map((body, index) =>
            body.__component === "text.media" ? (
              <Media key={index} media={body} />
            ) : body.__component === "text.quote" ? (
              <Quote key={index} quote={body.content} />
            ) : (
              <ParagraphText key={index} paragraph={body.content} />
            )
          )}
        </InnerContainer>
      </Container>
    </>
  );
};

export default Article;
