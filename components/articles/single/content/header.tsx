import React from "react";
import styled from "styled-components";
import DateView from "../../../form/Date";
import theme from "../../../../theme/main";

const Image = styled("img")``;

const MainImage = styled("img")`
  height: 410px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

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
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;
  color: ${theme.colors.primaryTextColor};
  padding-bottom: 30px;
`;

const ArticleHeader = ({ header }: { header: any }) => {
  return (
    <>
      <ArticleInfoWrapper>
        {header?.user?.firstname && (
          <Info>
            <Image src={require("../../../../assets/icons/user/vector.svg")} />
            {header.user && (
              <AuthorText>
                {header.user.firstname} {header.user.lastname.charAt(0) + `.`}
              </AuthorText>
            )}
          </Info>
        )}
        <Info>
          <Image src={require("../../../../assets/icons/user/clock.svg")} />
          <AuthorText>
            <DateView format="MMMM D, YYYY" date={header.published_at} />
          </AuthorText>
        </Info>
      </ArticleInfoWrapper>
      <ArticleTitle>{header.title}</ArticleTitle>
      <MainImage
        src={`${process.env.NEXT_PUBLIC_HOST}${header.mainMedia.url}`}
      />
    </>
  );
};

export default ArticleHeader;
