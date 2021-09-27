import { constants } from "node:buffer";
import React from "react";
import styled from "styled-components";
import { GraySection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer } from "../section";
import { BlockTitle, BlockContent } from "./text";

const ContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px;
  
`;

const SafetyText = styled(BlockContent)`
width: 310px;
text-align: left;
@media (max-width: 310px) {
  width: 100%;
  text-align: center;
}
`;

const Block = styled("div")`
  display: flex;
  align-items: center;
  padding: 0px 75px;
  flex-wrap:wrap;
  @media (max-width: 768px) {
    justify-content:center;
    padding: 0px;
  }
`;

const BlockContainer = styled("div")`
  display: flex;
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap:60px;
  max-width:1200px;

`;

const BlockContainerTop = styled(BlockContainer)`
  padding-bottom:30px;
`;
const BlockContainerBottom = styled(BlockContainer)`
padding-top:30px;
`;

const Image = styled("img")`
  width: 71.15px;
  height: 66.42px;
  margin-right: 20px;
  vertical-align: middle;
`;

const SafteyCenter = ({ title, subTitle, contents }) => {
  return (
    <GraySection>
      <SectionHeaderContainer>
        <SectionTitle>{title}</SectionTitle>
        <CenteredText>
          {subTitle}
        </CenteredText>
      </SectionHeaderContainer>
      <SectionContentContainer>
        <BlockContainer>
          {contents.map((content, index) => (
            <Block  key={index}>
              <Image src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`} />
              <div>
                <BlockTitle>{content.title}</BlockTitle>
                <SafetyText>
                  {content.subTitle}
                </SafetyText>
              </div>
            </Block>
          ))}

        </BlockContainer>

      </SectionContentContainer>
    </GraySection>
  );
};

export default SafteyCenter;
