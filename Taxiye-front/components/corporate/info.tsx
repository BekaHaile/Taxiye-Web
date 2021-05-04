import React from "react";
import styled from "styled-components";
import { DefaultSection, SectionTitle, CenteredText } from "../section";
import {BlockContent, BlockTitle} from './text';
import Image from "next/image";

const BlockWrapper = styled("div")`
display: flex;
align-items: flex-start;
margin: 60px 0px;
`;

const CorporateText = styled(BlockContent)`
max-width: 230px;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;
const CardImage = styled(Image)`

`;

const CorporateInfoSection = () => {
  return (
    <DefaultSection>
      <SectionTitle>Use Taxiye Corporate for</SectionTitle>
      <CenteredText>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis,
        mollis viverra conubia.
      </CenteredText>
      <CardImage width="635" height="375" src={require("../../assets/images/corporate/macbook-2.png")} />
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
        <Block>
          <BlockTitle>Employee perks</BlockTitle>
          <CorporateText>
            Night drops, weekend work travels, easy travel allowance options and
            more. We cover it all.
          </CorporateText>
        </Block>
      </BlockWrapper>
    </DefaultSection>
  );
};

export default CorporateInfoSection;
