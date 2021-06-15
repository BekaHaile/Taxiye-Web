import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { setHouseNumber } from "../../../../redux/actions/booking";
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
const HouseNumber = () => {
  const address = useSelector((state) => state["booking"]["address"]);
  return (
    <>
      <Title>House No. / Apartment Name</Title>
      <Input
        value={address}
        id="house"
        placeholder="Enter house number or apartment name here"
        onChange={(e) => store.dispatch(setHouseNumber(e.target.value))}
      />

    </>
  );
}

export default HouseNumber;