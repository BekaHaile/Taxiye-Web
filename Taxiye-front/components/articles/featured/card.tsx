import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Card = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 0px 33px;
  baackground: #ffffff;
  border-radius: 10px;
  background: #fff;
  width: 1246px;
  
  
`;

const CardImage = styled("img")`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  
  position: static;
  width: 660px;
  height: 410px;
  left: 0px;
  top: 0px;
`;

const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px 20px;
`;

const AuthorText = styled("span")`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #979797;
  margin: 0px 5px;
`;

const ArticleInfoWrapper = styled("div")`
  display: flex;
  margin: 0px 0px 15px;
`;

const ArticleTitle = styled("h1")`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #444444;
  margin: 0px 0px 10px 0px;
`;

const ArticleText = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #444444;
  margin: 10px 0px;
`;

const Button = styled("button")`
  height: 34px;
  border: 1px solid #A02167;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #A02167;
  margin: 10px 0px;
  background: #fff;
  width: 112px;
`;

const TextWrapper = styled("div")`
  width: 300px;
`;

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardImage src={article.image} />
      <CardBody>
        <TextWrapper>
        <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleInfoWrapper>
            <Image
              width="10px"
              height="11px"
              src={require("../../../assets/icons/user/vector.svg")}
            />
            <AuthorText>{article.author}</AuthorText>
            <Image
              width="10px"
              height="11px"
              src={require("../../../assets/icons/user/clock.svg")}
            />
            <AuthorText>{article.date}</AuthorText>
          </ArticleInfoWrapper>
          
          <ArticleText>{article.description}</ArticleText>
        </TextWrapper>
        <Button>Read More</Button>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
