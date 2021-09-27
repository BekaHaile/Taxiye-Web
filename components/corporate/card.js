import React from "react";
import styled from "styled-components";
import theme from "../../theme/main";

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 20px;
  background: ${theme.colors.white};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.161);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 270px;
  height: 310px;
  @media (max-width: 270px) {
    width: 100%;
  }
`;

const CardWrapper = styled("div")`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
const CenteredCard = styled(Card)`
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.161);
`;

const CardTitle = styled("h3")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding-bottom: 20px;
  text-align: center;
`;

const CardContent = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primaryTextColor}; ;
`;

const TitleContainer = styled("div")`
  padding-top: 30px;
`;

const Image = styled("img")``;
function contentView(content) {
  return (
    <>
      <Image src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`} />
      <TitleContainer>
        <CardTitle>{content.title}</CardTitle>
        <CardContent>{content.subTitle}</CardContent>
      </TitleContainer>
    </>
  );
}

const ExpenseCards = ({ contents }) => {
  return (
    <CardWrapper>
      {contents.map((content, index) =>
        contents.length % 2 != 0 && (contents.length + 1) / 2 == index + 1 ? (
          <CenteredCard key={index}>{contentView(content)}</CenteredCard>
        ) : (
          <Card key={index}>{contentView(content)}</Card>
        )
      )}
    </CardWrapper>
  );
};

export default ExpenseCards;
