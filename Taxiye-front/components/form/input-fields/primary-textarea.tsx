import React, { FunctionComponent } from "react";
import styled from "styled-components";

const DefaultTextArea = styled('textarea')`
width: 100%;
min-height:200px;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
&& {
  :focus {
    outline: none;
    border: 1px solid #A02167;
  }


`;

export {DefaultTextArea}