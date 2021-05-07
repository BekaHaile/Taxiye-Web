import React from "react";
import { CenteredText, GraySection, SectionTitle } from "../section";
import styled from "styled-components";

const CardContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
margin: 30px 0px;

`;

const SubTitle = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
margin:10px 0px;

color: #363636;
`;

const Title = styled("h3")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
margin:0px;

color: #363636;
`;

const StringContainer = styled("div")`
max-width:410px;
`;

const ElementContainer = styled("div")`
margin: 0px 30px;
`;
const Image = styled("img")`
height:50px;
width:50px;
`;

const contents = [{
    number: "1",
    img:require("../../assets/icons/number-1.svg"),
    title: "Requirement 1",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu.     '
},
{
    number: "2",
    img:require("../../assets/icons/number-2.svg"),
    title: "Requirement 2",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu.     '
},
{
    number: "3",
    img:require("../../assets/icons/number-3.svg"),
    title: "Requirement 3",
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. '
}
];


const Requirements = () => {
    return (
        <>
            <GraySection>
                <SectionTitle>Application Requirments</SectionTitle>
                <CenteredText>With simple steps to register and minimum requirements, you can be partners with us today. Below are the documents required from the driver upon registration.</CenteredText>
                <CardContainer>
                    <div>
                    {contents.map((content) => (
                        <CardContainer>
                        <Image src={content.img} />
                        <ElementContainer>
                        
                            <StringContainer>
                                <Title>{content.title}</Title>
                                <SubTitle>{content.subtitle}</SubTitle>
                            </StringContainer>
                        
                         </ElementContainer>
                        </CardContainer>
                       
                       ))}
                    </div>
                    <img src={require("../../assets/icons/requirements.svg")} />
                </CardContainer>
            </GraySection>
        </>
    );
};

export default Requirements;
