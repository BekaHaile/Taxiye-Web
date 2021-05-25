import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Card = styled("div")`
  display: flex;
  flex-direction: col;
  align-items: flex-start;
  padding: 0px;
  baackground: #ffffff;
  border-radius: 10px;
  background: #fff;
  gap:40px;
  
`;

const CardImage = styled("img")`
  border-radius: 10px 10px 0px 0px;
  width:inherit;
`;

const ImageContainer = styled("div")`
  width:660px;
  /*height:410px;*/
`;

const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin: 0px 0px 10px 0px;
`;

const ArticleText = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #444444;
  padding-bottom:20px;
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

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <ImageContainer>
        <CardImage src={`${process.env.NEXT_PUBLIC_HOST}${article.header.mainMedia.url}`} />
      </ImageContainer>
      <CardBody>
        <TextWrapper>
          <ArticleTitle>{article.header.title}</ArticleTitle>
          <ArticleInfoWrapper>
            <Info>
              <Image
                src={require("../../../assets/icons/user/vector.svg")}
              />
              <AuthorText>Neguse B.</AuthorText>
            </Info>
            <Info>
              <Image
                src={require("../../../assets/icons/user/clock.svg")}
              />
              <AuthorText>June 28, 2020</AuthorText>
            </Info>
          </ArticleInfoWrapper>

          <ArticleText>{article.header.longSubTitle}</ArticleText>
        </TextWrapper>
        <Link href={`/articles/${article.id}`}><Button>Read More</Button></Link>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
