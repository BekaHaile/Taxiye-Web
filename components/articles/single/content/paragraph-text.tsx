import React from 'react';
import styled from "styled-components";
import theme from '../../../../theme/main';


const ArticleParagraphText = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
text-transform: lowercase;
color:${theme.colors.primaryTextColor};;
padding-top:30px;
`;


const ArticleParagraph = ({ paragraph }) => {
    return (
        <> 
            <ArticleParagraphText>{paragraph}</ArticleParagraphText>


        </>
    );
}

export default ArticleParagraph;