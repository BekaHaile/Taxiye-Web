import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { addCoupon } from "../../../redux/actions/booking";
import store from "../../../redux/store";
import theme from '../../../theme/main';

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
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
    border: 2px solid ${theme.colors.primary};
  }
`;
const Confirm = () => {
  const couponCode = useSelector((state) => state["booking"]["couponCode"]);
  return (
    <>
      <Title>Coupon Code</Title>
      <Input
        value={couponCode}
        id="coupon"
        placeholder="Enter coupon code here (optional)"
        onChange={(e) => store.dispatch(addCoupon(e.target.value))}
      />

    </>
  );
}

export default Confirm;