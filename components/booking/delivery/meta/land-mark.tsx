import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { setLandmark } from "../../../../redux/actions/booking";
import store from "../../../../redux/store";
const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color: #444444;
`;
const Input = styled('input')`
width: 100%;
padding: 12px 20px;
display: inline-block;
border: 2px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin:10px 0px;

&& {
  :focus {
    outline: none;
    border: 2px solid #A02167;
  }
`;
const LandMark = () => {
  const landmark = useSelector((state) => state["booking"]["landmark"]);
  return (
    <>
      <Title>Landmark</Title>
      <Input
        value={landmark}
        id="landmark"
        placeholder="Enter popular landmark near you here (optional)"
        onChange={(e) => store.dispatch(setLandmark(e.target.value))}
      />

    </>
  );
}

export default LandMark;