import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  baackground: #ffffff;
  background: #fff;
  margin-top:34px;
 
`;

const CardImage = styled("img")`
  margin: 0;
  width: 350px;
  height:170px;
`;

const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Image = styled("img")`
 
`;


const Info = styled("div")`
  padding-right:10px;
`;

const AuthorText = styled("span")`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #979797;
  margin-left: 5px;
`;

const ArticleInfoWrapper = styled("div")`
  display: flex;
  padding-bottom: 10px;
  
`;

const ArticleTitle = styled("h1")`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #444444;
  padding: 0px 0px 10px 0px;
`;


const Button = styled("button")`
  border: 1px solid #A02167;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #A02167;
  background: #fff;
  padding:5px 20px;
`;

const TextWrapper = styled("div")`
  width: 300px;
`;



const PopularArticleCard = ({ article }) => {
  return (
    <Card>
      <CardImage src={article.image} />
      <CardBody>
      <TextWrapper>
       
          <ArticleInfoWrapper>
            <Info>
            <Image
              src={require("../../../../assets/icons/user/vector.svg")}
            />
            <AuthorText>{article.author}</AuthorText>
            </Info>
            <Info>
            <Image
              src={require("../../../../assets/icons/user/clock.svg")}
            />
            <AuthorText>{article.date}</AuthorText>
            </Info>
          </ArticleInfoWrapper>
          <ArticleTitle>{article.title}</ArticleTitle>
        </TextWrapper>
        <Link href="/articles/12345">
        <Button>Read More</Button>
        </Link>
        
      </CardBody>
    </Card>
  );
};

export default PopularArticleCard;
