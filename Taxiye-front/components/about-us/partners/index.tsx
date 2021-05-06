import React from "react";
import { DefaultSection, SectionTitle, CenteredText } from "../../section";
import styled from "styled-components";
import { Card, CardWrapper, CardContent, CardTitle, Image } from "./card";

const Container = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom:60px;
margin-top:80px;
`;
const CardContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom:60px;
`;

const contents = [{
    id: "1",
    img: require("../../../assets/images/logo/elnet-logo.png"),
    title: "Marketing Team",
    content: 'Our marketing team provides the necessary research to identify our target customers and other audiences. and provides necessary information to the customers.'
},
{
    id: "2",
    img: require("../../../assets/images/logo/elauto-logo.png"),
    title: "Marketing Team",
    content: 'Our marketing team provides the necessary research to identify our target customers and other audiences. and provides necessary information to the customers.'
}
];

const PartnersContent = () => {
    return (
        <>
            <DefaultSection>
                <SectionTitle>
                    Our Partners
                </SectionTitle>
                <CenteredText>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor.
                </CenteredText>
                <Container>
                    <CardWrapper>

                        <CardTitle>Taxiye has partnered up with 6+ taxi associations including Airport Taxi associations.</CardTitle>


                    </CardWrapper>
                    <CardContainer>
                        {contents.map((content) => (
                            <CardWrapper>
                                <Card>
                                    <Image src={content.img} />
                                    <CardContent>{content.content}</CardContent>
                                </Card>

                            </CardWrapper>
                        ))}
                    </CardContainer>
                </Container>

            </DefaultSection>
        </>
    );
}

export default PartnersContent;