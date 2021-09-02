import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { addNote } from "../../../../redux/actions/booking";
import store from "../../../../redux/store";
import theme from '../../../../theme/main';

const Title = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color:${theme.colors.primaryTextColor};;
padding-top:10px;
`;
const InputArea = styled('textarea')`
width: 100%;
padding: 12px 20px;
display: inline-block;
border: 2px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top:10px;
&& {
  :focus {
    outline: none;
    border: 2px solid ${theme.colors.primary};
  }
`;
const Note = () => {
  const note = useSelector((state) => state["booking"]["note"]);
  return (
    <>
      <Title>Note to Driver</Title>
      <InputArea
        value={note}
        rows={4}
        id="coupon"
        placeholder="Enter note here (optional)"
        onChange={(e) => store.dispatch(addNote(e.target.value))}
      />

    </>
  );
}

export default Note;