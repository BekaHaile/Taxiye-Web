import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const RatingWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  width:50%;
  align-item:center;
  margin:auto;
`;

const Ratings = ({rate}) => {
  const [ratingNodes, setRatingNodes] = useState([]);
  useEffect(() => {
    let symbols = [];
    for (let i = 0; i < rate; i++) {
      symbols.push(
        <Image
          width="22.56319236755371px"
          height="21.45972442626953px"
          src={require("../../../assets/icons/star.png")}
        />
      );
    }
    setRatingNodes(symbols);
  });

  return <RatingWrapper>{ratingNodes}</RatingWrapper>;
};

export default Ratings;
