import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RatingWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-item:center;
  gap:10px;
  width: max-content;
  margin:auto;
  padding-top:10px;
`;
const Image = styled("img")`

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

  return <RatingWrapper className="testimony-rating">{ratingNodes}</RatingWrapper>;
};

export default Ratings;
