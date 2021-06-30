import React from 'react';
import styled from 'styled-components';
import { DefaultSection, SectionTitle, CenteredText, SectionHeaderContainer, SectionContentContainer } from '../section';
import theme from '../../theme/main';
const ContentWrapper = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
`;

const BlockTitle = styled('h3')`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
margin-bottom: 15px;
color: ${theme.colors.primary};
`;

const BlockContent = styled('p')`
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
color:${theme.colors.primaryTextColor};;
max-width: 450px;
`;

const Block = styled('div')`
display: flex;
flex-direction: column;
justify-content; center;
align-items: center;
padding: 0px 75px;
`;

const Row = styled('div')`
display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap:40px;
padding-bottom:20px;
`;
const RowBottom = styled('div')`
display: flex;
padding-top:20px;
`;

const HeaderContainer = styled('div')`
width:450px;
text-align: center;
`;

const Image = styled("img")`
width: 300px;
`;

const Architecture = ({ title, subTitle, contents }) => {
    return (
        <DefaultSection>
            <SectionHeaderContainer>
                <SectionTitle>{title}</SectionTitle>
                <CenteredText>{subTitle}</CenteredText>
            </SectionHeaderContainer>
            <SectionContentContainer>
                <ContentWrapper>
                    <Row>
                        {contents.map((content, index) => (
                            <Block  key={index}>
                                <Image src={`${process.env.NEXT_PUBLIC_HOST}${content.thumbnail.url}`} />
                                <HeaderContainer>
                                    <BlockTitle>{content.title}</BlockTitle>
                                    <BlockContent>{content.subTitle}</BlockContent>
                                </HeaderContainer>
                            </Block>


                        ))}

                    </Row>
                </ContentWrapper>
            </SectionContentContainer>
        </DefaultSection>
    );
}

export default Architecture;