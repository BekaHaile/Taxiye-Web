import React from 'react';
import Card from "./card";
import styled from "styled-components";
import {DefaultSection} from "../../section";

const CardSection = styled("div")`
  padding-bottom:40px;
  gap:40px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

`;


const ArticleList = ({unfeatured}) => {
    return(
        <>
        <CardSection>
         {unfeatured.map((article) => (
           
        <Card key={article.id} article={article} />
        
      ))}
      </CardSection>

     
        </>
    );
}

export default ArticleList;