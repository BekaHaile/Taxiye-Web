import React from 'react';
import styled from 'styled-components';
import {DefaultSection, SectionTitle, CenteredText} from '../section';

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
margin: 15px 0px;
color: #A02167;
`;

const BlockContent = styled('p')`
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #444444;
margin-bottom: 15px;
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
display: flex;
`;

const Image = styled("img")`
width: 300px;
`;

const Architecture = () => {
    return (
        <DefaultSection>
            <SectionTitle>How it works</SectionTitle>
            <CenteredText>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.</CenteredText>
            <ContentWrapper>
                <Row>
                    <Block>
                        <Image src={require("../../assets/images/corporate/add-new.png")} />
                        <BlockTitle>Manage employees via dashboard</BlockTitle>
                        <BlockContent>Sign up to access your Taxiye Corporate Dashboard and Invite your employees.</BlockContent>
                    </Block>
                    <Block>
                        <Image src={require("../../assets/images/corporate/mobile.png")} />
                        <BlockTitle>Employees book their own rides</BlockTitle>
                        <BlockContent>Your employees book their rides with the toggle of a button through their Taxiye app.</BlockContent>
                    </Block>
                </Row>
                <Row>
                    <Block>
                        <Image src={require("../../assets/images/corporate/receipt.png")} />
                        <BlockTitle>You pay for the trip as you want</BlockTitle>
                        <BlockContent>You can pay for the trip after or gets automatically paid through your Taxiye Corporate balance.</BlockContent>
                    </Block>
                    <Block>
                        <Image src={require("../../assets/images/corporate/track-things.png")} />
                        <BlockTitle>Track employee expenses and invoices</BlockTitle>
                        <BlockContent>Track trip expense details and download invoices anytime from the dashboard.</BlockContent>
                    </Block>
                </Row>
            </ContentWrapper>
        </DefaultSection>
    );
}

export default Architecture;