import React from 'react';
import styled from "styled-components";
import colors from '../../../theme/main/colors';
import  Socials from "./socials";



const HeaderTitle = styled('h3')`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color:${colors.primary};
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
    padding-top: 8px;
    color: #444444;
`;
const ContentContainer = styled('div')`
    padding-top:40px;
`;
const HeaderContainer = styled('div')`
    
`;


const Info = ({info}) => {
    return (
        <>
        <HeaderContainer>
            <HeaderTitle>
                {info.header}
            </HeaderTitle>
            <HeaderSubTitle>{info.headersubTitle}</HeaderSubTitle>
        </HeaderContainer>
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