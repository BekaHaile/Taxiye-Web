import React from 'react';
import styled from 'styled-components';
import {DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer, SectionContentContainer } from '../section';

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
color: #A02167;
`;

const BlockContent = styled('p')`
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #444444;
max-width: 450px;
`;

const Block = styled('div')`
display: flex;
flex-direction: column;
justify-content; center;
align-items: center;
padding: 0px 75px;
`;

const RowTop = styled('div')`
display: flex;
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

const Architecture = () => {
    return (
        <DefaultSection>
            <SectionHeaderContainer>
            <SectionTitle>How it works</SectionTitle>
            <CenteredText>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.</CenteredText>
            </SectionHeaderContainer>
            <SectionContentContainer>
            <ContentWrapper>
                <RowTop>
                    <Block>
                        <Image src={require("../../assets/images/corporate/add-new.png")} />
                        <HeaderContainer>
                        <BlockTitle>Manage employees via dashboard</BlockTitle>
                        <BlockContent>Sign up to access your Taxiye Corporate Dashboard and Invite your employees.</BlockContent>
                        </HeaderContainer>
                    </Block>
                    <Block>
                        <Image src={require("../../assets/images/corporate/mobile.png")} />
                        <HeaderContainer>
                        <BlockTitle>Employees book their own rides</BlockTitle>
                        <BlockContent>Your employees book their rides with the toggle of a button through their Taxiye app.</BlockContent>
                        </HeaderContainer>
                    </Block>
                </RowTop>
                <RowBottom>
                    <Block>
                        <Image src={require("../../assets/images/corporate/receipt.png")} />
                        <HeaderContainer>
                        <BlockTitle>You pay for the trip as you want</BlockTitle>
                        <BlockContent>You can pay for the trip after or gets automatically paid through your Taxiye Corporate balance.</BlockContent>
                        </HeaderContainer>
                    </Block>
                    <Block>
                        <Image src={require("../../assets/images/corporate/track-things.png")} />
                        <HeaderContainer>
                        <BlockTitle>Track employee expenses and invoices</BlockTitle>
                        <BlockContent>Track trip expense details and download invoices anytime from the dashboard.</BlockContent>
                        </HeaderContainer>
                    </Block>
                </RowBottom>
            </ContentWrapper>
            </SectionContentContainer>
        </DefaultSection>
    );
}

export default Architecture;