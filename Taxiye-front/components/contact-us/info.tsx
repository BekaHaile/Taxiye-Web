import React from 'react';
import styled from "styled-components";
import colors from '../../theme/main/colors';

const OfficeDetail = styled("div")`  
    width:400px;
`;


const HeaderTitle = styled('h3')`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color:${colors.primary};
    margin: 0px 0px;
`;
const SecondaryHeaderTitle = styled('h4')`
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
    margin: 0.5em 0px;
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
    margin: 0.3em 0px;
    color: #444444;
`;
const ContentContainer = styled('div')`
    width:114px
`;




const Info = ({info}) => {
    return (
        <div>
            <HeaderTitle>
                {info.header}
            </HeaderTitle>
            <SecondaryHeaderTitle>
                {info.secondaryheader}
            </SecondaryHeaderTitle>
            <HeaderSubTitle>{info.headersubTitle}</HeaderSubTitle>
            {info.content.map((content) => (
                <div>
                    <ContentTitle>{content.title}</ContentTitle>
                    {content.details.map((detail) => (
                        <ContentDetailText>{detail}</ContentDetailText>
                    ))}

                </div>

            ))}

        </div>
    );
}

export default Info;