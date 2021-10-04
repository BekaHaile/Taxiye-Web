import React from "react";
import styled from "styled-components";
import Link from "next/link";
import DateView from "../../form/Date";
import theme from "../../../theme/main";

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 10px 33px;
  baackground: ${theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: ${theme.colors.white};
  height:460px;
  overflow:hidden;
  @media (max-width: 768px) {
    margin:0px;
  }
  @media (max-width: 340px) {
    width: 100%;
    margin: 10px;
  }
  @media (max-width: 500px) {
    margin: 10px;
  }
`;

const CardImage = styled("img")`
  border-radius: 10px 10px 0px 0px;
  margin: 0;
  height: auto;
  min-height:230px;
  width: 100%;
`;

const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:space-between;
  padding: 20px;
  height:100%;
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const Image = styled("img")``;

const Info = styled("div")`
  padding-right: 10px;
`;

const AuthorText = styled("span")`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${theme.colors.secondaryTextColor};
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
  color: ${theme.colors.primaryTextColor};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom:10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ArticleText = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: ${theme.colors.primaryTextColor};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Button = styled("button")`
  border: 1px solid ${theme.colors.primary};
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  padding: 5px 20px;
`;

const TextWrapper = styled("div")`
  width: 300px;
  @media (max-width: 300px) {
    width: 100%;
  }
`;

const FlexCard = styled(Card)``;

const CenteredCard = styled(Card)`
  margin: 0px 40px;
`;

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardImage
        src={`${process.env.NEXT_PUBLIC_HOST}${article.thumbnail.url}`}
      />
      <CardBody>
        <TextWrapper>
          <ArticleInfoWrapper>
            <Info>
              <Image src={require("../../../assets/icons/user/vector.svg")} />
              {article.user && (
                <AuthorText>
                  {article.user.firstname}{" "}
                  {article.user.lastname.charAt(0) + `.`}
                </AuthorText>
              )}
            </Info>
            <Info>
              <Image src={require("../../../assets/icons/user/clock.svg")} />
              <AuthorText>
                <DateView format="MMMM D, YYYY" date={article.published_at} />
              </AuthorText>
            </Info>
          </ArticleInfoWrapper>
          <ArticleTitle>{article.headerTitle}</ArticleTitle>
          <ArticleText>{article.headerSubTitle}</ArticleText>
        </TextWrapper>
        <Link href={`/articles/` + article.id}>
          <Button>Read More</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
