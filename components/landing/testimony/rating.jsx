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

const Ratings = ({ rate }) => {
  var rates = new Array(rate);


  return <RatingWrapper className="testimony-rating"> {
    rates.map((rate, index) =>

      <Image
        key={index}
        width="22.56319236755371px"
        height="21.45972442626953px"
        src={require("../../../assets/icons/star.png")}
      />
    )
  }
  </RatingWrapper>;
};

export default Ratings;
