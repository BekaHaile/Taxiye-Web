import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";
import {
  DefaultSection,
  SectionTitle,
  SectionContentContainer,
} from "../../section";

const ServiceTitle = styled(SectionTitle)`
  padding-bottom: 20px;
`;

const LeftServiceTitle = styled(ServiceTitle)`
  text-align: Left;
  @media (max-width: 768px) {
    padding: 0px 20px;
    padding-bottom:20px;
  }
`;

const FlexRow = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: left;
  width: 100%;
  min-height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
`;

const Container = styled("div")`
  align-items: center;
  padding-right: 60px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

const Description = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  color: ${theme.colors.primaryLabelColor};
  max-width: 500px;
  flex: 1;
`;

const LeftDescription = styled(Description)`
  text-align: Left;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    padding:0px 20px;
    padding-bottom: 20px;
  }
`;

const SecondaryImage = styled("img")`
  max-height: 400px;
  max-width: 400px;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;


const PrimaryImage = styled("img")`
  max-height: 400px;
  max-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled("div")`
  max-width: 601px;
  height: 557px;
  position: relative;
  width:auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomSectionContentContainer = styled(SectionContentContainer)`
  padding: 0px;
`;

const WeAreContent = ({ title, description, primaryImage, secondaryImage }) => {
  return (
    <>
      <DefaultSection>
        <CustomSectionContentContainer>
          <FlexRow>
            <Container>
              <div>
                <LeftServiceTitle>{title}</LeftServiceTitle>

                {description.map((text, index) => (
                  <LeftDescription key={index}>{text?.content}</LeftDescription>
                ))}
              </div>
            </Container>

            <ImageContainer>
              <PrimaryImage
                src={`${process.env.NEXT_PUBLIC_HOST}${primaryImage?.url}`}
              />
              <SecondaryImage
                src={`${process.env.NEXT_PUBLIC_HOST}${secondaryImage?.url}`}
              />
            </ImageContainer>
          </FlexRow>
        </CustomSectionContentContainer>
      </DefaultSection>
    </>
  );
};

export default WeAreContent;
