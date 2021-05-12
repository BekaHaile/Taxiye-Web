import React from 'react';
import styled from "styled-components";
import colors from '../../../theme/main/colors';
import  Socials from "./socials";



const HeaderTitle = styled('h4')`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #363636;

`;


const HeaderSubTitle = styled('p')`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #444444;
`;
const ContentTitle = styled('h5')`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
`;


const ContentDetailText = styled('p')`
    font-size: 16px;
    line-height: 22px;
    padding-top: 10px;
    color: #444444;
`;
const ContentContainer = styled('div')`
    padding-top:40px;
`;

const Info = ({info}) => {
    return (
        <>
            <HeaderTitle>
                {info.header}
            </HeaderTitle>
            <HeaderSubTitle>{info.headersubTitle}</HeaderSubTitle>
            {info.content.map((content) => (
                <ContentContainer>
                    <ContentTitle>{content.title}</ContentTitle>
                    {content.details.map((detail) => (
                        <ContentDetailText>{detail}</ContentDetailText>
                    ))}

                </ContentContainer>

            ))}
            <ContentContainer>
             <Socials />
            </ContentContainer>


        </>
    );
}

export default Info;