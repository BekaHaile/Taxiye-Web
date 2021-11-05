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
import Markdown from "markdown-to-jsx";
const SectionContentContainerView = styled(SectionContentContainer)`
  width: 100%;
`;

const CardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0px;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SubTitle = styled("div")`
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
  width: 40%;
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
        <SectionContentContainerView>
          <CardContainer>
            <div>
              {contents.map((content, index) => (
                <CardContainer key={index}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`}
                  />
                  <ElementContainer>
                    <StringContainer>
                      <Title>
                        <Markdown>{content?.title}</Markdown>
                      </Title>
                      <SubTitle>
                        <Markdown>{content?.description}</Markdown>
                      </SubTitle>
                    </StringContainer>
                  </ElementContainer>
                </CardContainer>
              ))}
            </div>
            <MainImage
              src={`${process.env.NEXT_PUBLIC_HOST}${mainImage.url}`}
            />
          </CardContainer>
        </SectionContentContainerView>
      </GraySection>
    </>
  );
};

export default Requirements;
