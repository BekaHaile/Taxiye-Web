import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const RatingWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
`;

const Ratings = () => {
  const [ratingNodes, setRatingNodes] = useState([]);
  useEffect(() => {
    let symbols = [];
    for (let i = 0; i < 5; i++) {
      symbols.push(
        <Image
          width="auto"
          height="auto"
          src={require("../../../assets/icons/star.png")}
        />
      );
    }
    setRatingNodes(symbols);
  });

  return <RatingWrapper>{ratingNodes}</RatingWrapper>;
};

export default Ratings;
