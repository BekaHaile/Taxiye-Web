import React from "react";
import styled from "styled-components";
import { DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer, SectionContentContainer  } from "../section";
import {BlockContent, BlockTitle} from './text';

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
const CardImage = styled("div")`
width:635px;
height:375px;
background-image:url(${require("../../assets/images/corporate/macbook-2.png")});
background-repeat: no-repeat;
background-size: 635px 375px;
background-position: center; 
margin:auto;
margin-top:20px;



`;

const CorporateInfoSection = () => {
  return (
    <DefaultSection>
      <SectionHeaderContainer>
      <SectionTitle>Use Taxiye Corporate for</SectionTitle>
      <CenteredText>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis,
        mollis viverra conubia.
      </CenteredText>
      
      
      <CardImage   />
      </SectionHeaderContainer>
      <SectionContentContainer>
      <BlockWrapper>
        <Block>
          <BlockTitle>Executive Travel</BlockTitle>
          <CorporateText>
            Book comfortable rides with Taxiye for executives right from our
            corporate dashboard.
          </CorporateText>
        </Block>
        <Block>
          <BlockTitle>Point to point travel</BlockTitle>
          <CorporateText>
            Safe, fast and easy city travel option for employees.
          </CorporateText>
        </Block>
        <Block>
          <BlockTitle>Employee pick up and drop</BlockTitle>
          <CorporateText>
            Hassle-free daily commute for employees with Taxiye.
          </CorporateText>
        </Block>
        <LastBlock>
          <BlockTitle>Employee perks</BlockTitle>
          <CorporateText>
          Night drops, weekend work travels, easy travel allowance options and more.
          We cover it all.
          </CorporateText>
        </LastBlock>
      </BlockWrapper>
      </SectionContentContainer>
    </DefaultSection>
  );
};

export default CorporateInfoSection;
