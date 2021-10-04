import React from "react";
import Card from "./card";
import Slider from "../../slider";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const settings = {
  itemsToShow: 3,
  itemPadding: [25, 0],
  transitionMs: 700,
  // breakPoints : [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 1},
  //   { width: 768, itemsToShow: 2},
  //   { width: 850, itemsToShow: 3 },
  // ]
};

const ArticleSlider = ({ articles }) => {
  return (
    <>
      <div className="mobile-view">
        <Container>
          {articles.map((article) => (
            <Card key={article?.id} article={article} />
          ))}
        </Container>
      </div>
      <div className="desktop-view">
        <Slider
          content={articles.map((article) => (
            <Card key={article?.id} article={article} />
          ))}
          settings={settings}
        />
      </div>
    </>
  );
};

export default ArticleSlider;
