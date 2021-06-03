import React from "react";
import styled from "styled-components";
import { DefaultSection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer  } from "../section";


const BlockTitle = styled("h3")`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #363636;
  margin: 0px 0px;
`;

const BlockContent = styled("p")`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #363636;
  margin-top: 20px;
`;


const ContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 0px;
  
`;

const SafetyText = styled(BlockContent)`
width: 310px;
text-align: left;
`;

const Block = styled("div")`
  display: flex;
  align-items: center;
  padding: 0px 75px;
  margin-bottom: 30px;;
`;

const Image = styled("img")`
  width: 72px;
  height: 66px;
  margin-right: 20px;
  vertical-align: middle;
`;

const SafteyCenter = ({title, subTitle, contents}) => {
  return (
    <DefaultSection>
      <SectionHeaderContainer>
      <SectionTitle>{title}</SectionTitle>
      <CenteredText>
        {subTitle}
      </CenteredText>
      </SectionHeaderContainer>
      <SectionContentContainer>
      <ContentWrapper>
        <div>
          <Block>
            <Image src={require("../../assets/icons/safety/location.svg")} />
            <div>
              <BlockTitle>Share your location</BlockTitle>
              <SafetyText>
                Real time trip details can be shared with family and friends.
              </SafetyText>
            </div>
          </Block>
          <Block>
            <Image src={require("../../assets/icons/safety/support.svg")} />
            <div>
              <BlockTitle>24/7 support</BlockTitle>
              <SafetyText>
                Our Support Team is always standing by, ready to help by phone or email.
              </SafetyText>
            </div>
          </Block>
        </div>
        <div>
          <Block>
            <Image src={require("../../assets/icons/safety/feedback.svg")} />
            <div>
              <BlockTitle>Giving us feedback</BlockTitle>
              <SafetyText>
                After each trip, you have the option to rate your rider and share your thoughts.
              </SafetyText>
            </div>
          </Block>
          <Block>
            <Image src={require("../../assets/icons/safety/emergency.svg")} />
            <div>
              <BlockTitle>Emergency alert button</BlockTitle>
              <SafetyText>
                Button can be used to alert the emergency contacts or nearest PCR.
              </SafetyText>
            </div>
          </Block>
        </div>
      </ContentWrapper>
      </SectionContentContainer>
    </DefaultSection>
  );
};

export default SafteyCenter;
