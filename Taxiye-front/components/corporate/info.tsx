import React from "react";
import styled from "styled-components";
import { DefaultSection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer } from "../section";
import { BlockContent, BlockTitle } from './text';

const BlockWrapper = styled("div")`
display: flex;
align-items: flex-start;
margin: 0px 0px;
`;

const CorporateText = styled(BlockContent)`
width: 230px;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
`;
const LastBlock = styled(Block)`

  padding: 0px;
`;

const CorporateInfoSection = ({ backgroundImage, title, subTitle, contents }) => {
  const url = `${process.env.NEXT_PUBLIC_HOST}${backgroundImage.url}`;
  const CardImage = styled("div")`
    width:635px;
    height:375px;
    background-image:url(${url});
    background-repeat: no-repeat;
    background-size: 635px 375px;
    background-position: center; 
    margin:auto;
    margin-top:20px;
`;

  return (
    <DefaultSection>
      <SectionHeaderContainer>
        <SectionTitle>{title}</SectionTitle>
        <CenteredText>
          {subTitle}
        </CenteredText>


        <CardImage />
      </SectionHeaderContainer>
      <SectionContentContainer>
        <BlockWrapper>
          {contents.map((content) => (
            <Block>
              <BlockTitle>{content.title}</BlockTitle>
              <CorporateText>
                {content.subTitle}
              </CorporateText>
            </Block>
          ))}

        </BlockWrapper>
      </SectionContentContainer>
    </DefaultSection>
  );
};

export default CorporateInfoSection;
