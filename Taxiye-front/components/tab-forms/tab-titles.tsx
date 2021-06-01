import React from 'react';
import styled from 'styled-components';
import {Button} from "./inputs";
import Link from "next/link";

const Title = styled("h5")`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #444444;
  padding-bottom:10px;
  margin:0px;
`;

const SubTitle = styled("h6")`
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #444444;
  margin:0px;
`;
const HomeTitles = styled("div")`
`;

const FormContainer = styled("div")`
  padding:0px 20px;
`;
const CustomButton = styled(Button)`
  margin:10px 20px;
  margin-top:30px;
`;


export {Title, SubTitle, HomeTitles, FormContainer,CustomButton, Link};