import React from "react";
import Card from "./card";
import Slider from "../../slider";
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
