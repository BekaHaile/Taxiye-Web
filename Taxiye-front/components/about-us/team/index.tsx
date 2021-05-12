import React from "react";
import { DefaultSection, SectionTitle, CenteredText,SectionHeaderContainer,SectionContentContainer  } from "../../section";
import { TeamCard, SecondaryTeamCard } from "./card";
import styled from "styled-components";

const CardContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
`;
const Container = styled("div")`

    margin:0px 60px;
`;

const SectionTitleCenter = styled(SectionTitle)`

    margin:auto;
`;
const CenteredTextContent = styled(CenteredText)`

    margin:auto;
`;

const groupcontents = [{
    id: "1",
    img: require("../../../assets/images/people/marketing.png"),
    title: "Marketing Team",
    content: 'Our marketing team provides the necessary research to identify our target customers and other audiences. and provides necessary information to the customers.'
},
{
    id: "2",
    img: require("../../../assets/images/people/customer-service.png"),
    title: "Customer Services Team",
    content: 'Our customer service is all about bringing customers back and about sending them away happy!  Hearing you and tending to your needs are our primary duties.'
},
{
    id: "3",
    img: require("../../../assets/images/people/call-center.png"),
    title: "Call Center Team",
    content: 'Every minute, many calls from multiple channels take place between your ustomers and our organization. These interactions are possessed by our call center team.'
}
];

const singlecontent = [{
    id: "1",
    img: require("../../../assets/images/people/tsedey.png"),
    title: "Tsedey Asfaw",
    content: 'Managing Director'
},
{
    id: "2",
    img: require("../../../assets/images/people/daniel.png"),
    title: "Daniel Mulugeta",
    content: 'Operations Manager'
},
{
    id: "3",
    img: require("../../../assets/images/people/mesay.png"),
    title: "Mesay Derar",
    content: 'Human Resource Manager'
},
{
    id: "3",
    img: require("../../../assets/images/people/deborah.png"),
    title: "Deborah Mammo",
    content: 'Marketing Manager'
}
];

const AboutUsContent = () => {
    return (
        <>
            <DefaultSection>
                <Container>
                <SectionHeaderContainer>
                    <SectionTitleCenter>
                        Our Team
                </SectionTitleCenter>
                <CenteredTextContent>
                        Our company is ran by the best and brightest team in the industy.
                </CenteredTextContent>
                </SectionHeaderContainer>
                    
                <SectionContentContainer>
                    <CardContainer>
                        {singlecontent.map((content) => (

                            <SecondaryTeamCard key={content.id} content={content} />

                        ))}
                    </CardContainer>
                  
                </SectionContentContainer>

                <SectionContentContainer>
                  
                    <CardContainer>
                        {groupcontents.map((content) => (

                            <TeamCard key={content.id} content={content} />

                        ))}
                    </CardContainer>
                </SectionContentContainer>
                
                </Container>

                
            </DefaultSection>
        </>
    );
}

export default AboutUsContent;