import React from "react";
import Carousel from "react-elastic-carousel";

var consts = {
  PREV: "PREV",
  NEXT: "NEXT",
  START: "flex-start",
  CENTER: "center",
  END: "flex-end",
};

const Slider = ({ settings, content }) => {
  function myArrow({ type, onClick, isEdge }) {
    return type === consts.PREV ? (
      <button
        onClick={onClick}
        className="rec rec-arrow rec rec-arrow-left"
        disabled={isEdge}
        type="button"
      ></button>
    ) : (
      <button
        onClick={onClick}
        className="rec rec-arrow rec rec-arrow-right"
        disabled={isEdge}
        type="button"
      ></button>
    );
  }
  return (
    <Carousel
      isRTL={false}
      renderArrow={myArrow}
      itemsToShow={settings.itemsToShow}
      itemPadding={settings.itemPadding}
      transitionMs={settings.transitionMs}
    >
      {content}
    </Carousel>
  );
};

export default Slider;
