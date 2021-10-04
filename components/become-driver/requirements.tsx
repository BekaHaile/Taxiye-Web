import React from "react";
import {
  CenteredText,
  GraySection,
  SectionTitle,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../section";
import styled from "styled-components";
import theme from "../../theme/main";

const CardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SubTitle = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  margin: 10px 0px;

  color: ${theme.colors.primaryLabelColor}; ;
`;

const Title = styled("h3")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin: 0px;

  color: ${theme.colors.primaryLabelColor}; ;
`;

const StringContainer = styled("div")`
  width: 410px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ElementContainer = styled("div")`
  margin: 0px 30px;
`;
const Image = styled("img")`
  height: 50px;
  width: 50px;
`;

const MainImage = styled("img")`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Requirements = ({ title, subTitle, contents, mainImage }) => {
  return (
    <>
      <GraySection>
        <SectionHeaderContainer>
          <SectionTitle>{title}</SectionTitle>
          <CenteredText>{subTitle}</CenteredText>
        </SectionHeaderContainer>
        <SectionContentContainer>
          <CardContainer>
            <div>
              {contents.map((content, index) => (
                <CardContainer key={index}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`}
                  />
                  <ElementContainer>
                    <StringContainer>
                      <Title>{content.title}</Title>
                      <SubTitle
                        dangerouslySetInnerHTML={{
                          __html: content.description,
                        }}
                      />
                    </StringContainer>
                  </ElementContainer>
                </CardContainer>
              ))}
            </div>
            <MainImage
              src={`${process.env.NEXT_PUBLIC_HOST}${mainImage.url}`}
            />
          </CardContainer>
        </SectionContentContainer>
      </GraySection>
    </>
  );
};

export default Requirements;
