import React from "react";
import {
  DefaultSection,
  SectionTitle,
  CenteredText,
  SectionHeaderContainer,
  SectionContentContainer,
} from "../../section";
import { TeamCard, SecondaryTeamCard } from "./card";
import styled from "styled-components";

const CardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
const Container = styled("div")`
  margin: 0px 60px;
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const SectionTitleCenter = styled(SectionTitle)`
  margin: auto;
`;
const CenteredTextContent = styled(CenteredText)`
  margin: auto;
`;

const AboutUsContent = ({ title, subTitle, teamContents, groupContents }) => {
  return (
    <>
      <DefaultSection>
        <Container>
          <SectionHeaderContainer>
            <SectionTitleCenter>{title}</SectionTitleCenter>
            <CenteredTextContent>{subTitle}</CenteredTextContent>
          </SectionHeaderContainer>
          <div>
            <SectionContentContainer>
              <CardContainer>
                {teamContents.map((content) => (
                  <SecondaryTeamCard key={content.id} content={content} />
                ))}
              </CardContainer>
            </SectionContentContainer>

            <SectionContentContainer>
              <CardContainer>
                {groupContents.map((content) => (
                  <TeamCard key={content.id} content={content} />
                ))}
              </CardContainer>
            </SectionContentContainer>
          </div>
        </Container>
      </DefaultSection>
    </>
  );
};

export default AboutUsContent;
