import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px 33px;
  baackground: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #fff;
`;

const CardImage = styled("img")`
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  height: 230px;
  width: 100%;
`;

const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
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
  margin: 10px 0px;
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
  border: 1px solid #e45397;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #e45397;
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
          <ArticleInfoWrapper>
            <Image
              width="10px"
              height="11px"
              src={require("../../../assets/icons/user/Vector.png")}
            />
            <AuthorText>{article.author}</AuthorText>
            <Image
              width="10px"
              height="11px"
              src={require("../../../assets/icons/clock.png")}
            />
            <AuthorText>{article.date}</AuthorText>
          </ArticleInfoWrapper>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleText>{article.description}</ArticleText>
        </TextWrapper>
        <Button>Read More</Button>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
