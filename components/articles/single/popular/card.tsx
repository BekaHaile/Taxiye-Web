import React from "react";
import styled from "styled-components";
import Link from "next/link";
import DateView from "../../../form/Date";

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
      <CardImage src={`${process.env.NEXT_PUBLIC_HOST}${article.thumbnail.url}`} />
      <CardBody>
        <TextWrapper>

          <ArticleInfoWrapper>
            <Info>
              <Image
                src={require("../../../../assets/icons/user/vector.svg")}
              />
              {
                article.user &&
                <AuthorText>{article.user.firstname} {article.user.lastname.charAt(0) + `.`}</AuthorText>
              }
            </Info>
            <Info>
              <Image
                src={require("../../../../assets/icons/user/clock.svg")}
              />
              <AuthorText>
                <DateView format="MMMM D, YYYY" date={article.published_at} />
              </AuthorText>
            </Info>
          </ArticleInfoWrapper>
          <ArticleTitle>{article.headerTitle}</ArticleTitle>
        </TextWrapper>
        <Link href={`/articles/${article.id}`}>
          <Button>Read More</Button>
        </Link>

      </CardBody>
    </Card>
  );
};

export default PopularArticleCard;
