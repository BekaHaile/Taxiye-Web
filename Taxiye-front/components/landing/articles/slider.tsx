import React from "react";
import Card from "./card";
import Slider from "../../slider";
const settings = {
  itemsToShow: 3,
  itemPadding: [25, 0],
  transitionMs: 700
}

const ArticleSlider = ({ articles }) => {

  return (
    <Slider
      content=
      {articles.map((article) => (
        <Card key={article.id} article={article} />
      ))}

      settings={settings}
    />
  );
};

export default ArticleSlider;
