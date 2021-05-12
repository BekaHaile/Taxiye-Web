import React from "react";
import styled from "styled-components";
import { GraySection, SectionTitle, CenteredText,SectionHeaderContainer, SectionContentContainer  } from "../section";
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
`;

const Block = styled("div")`
  display: flex;
  align-items: center;
  padding: 0px 75px;
`;

const BlockContainer = styled("div")`
  display: flex;
  align-items: center;
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

const SafteyCenter = () => {
  return (
    <GraySection>
      <SectionHeaderContainer>
      <SectionTitle>Taxiye Safety Center</SectionTitle>
      <CenteredText>
        Our safety standards make sure that your employees are comfortable and
        secure throughout the trip!
      </CenteredText>
      </SectionHeaderContainer>
      <SectionContentContainer>
      
        <BlockContainerTop>
          <Block>
            <Image src={require("../../assets/icons/safety.png")} />
            <div>
              <BlockTitle>Track your trip</BlockTitle>
              <SafetyText>
                Real time trip details can be shared with family and friends.
              </SafetyText>
            </div>
          </Block>
          <Block>
            <Image src={require("../../assets/icons/locked.png")} />
            <div>
              <BlockTitle>Phone Number Privacy</BlockTitle>
              <SafetyText>
                Customer’s mobile number is masked at the driver’s end to ensure
                privacy.
              </SafetyText>
            </div>
          </Block>
        </BlockContainerTop>
        <BlockContainerBottom>
          <Block>
            <Image src={require("../../assets/icons/address.png")} />
            <div>
              <BlockTitle>Verified Professional Drivers</BlockTitle>
              <SafetyText>
                Thorough background checks are conducted on Taxiye drivers.
              </SafetyText>
            </div>
          </Block>
          <Block>
            <Image src={require("../../assets/icons/sos.png")} />
            <div>
              <BlockTitle>Emergency alert button</BlockTitle>
              <SafetyText>
                Button can be used to alert the emergency contacts or nearest
                PCR.
              </SafetyText>
            </div>
          </Block>
        </BlockContainerBottom>
      </SectionContentContainer>
    </GraySection>
  );
};

export default SafteyCenter;
