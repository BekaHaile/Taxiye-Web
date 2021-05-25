import React from 'react';
import styled from "styled-components";

const Image = styled("img")`
 
`;

const MainImage = styled("img")`
 height:410px;
`;


const Info = styled("div")`
  padding-right:10px;
`;

const AuthorText = styled("span")`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #979797;
  margin-left: 5px;
`;

const ArticleInfoWrapper = styled("div")`
  display: flex;
  padding-bottom: 10px;
  
`;

const ArticleTitle = styled("h1")`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 30px;
color: #444444;
padding-bottom:30px;
`;


const ArticleHeader = ({header}) => {
    return (
        <>
            <ArticleInfoWrapper>
                <Info>
                    <Image
                        src={require("../../../../assets/icons/user/vector.svg")}
                    />
                    <AuthorText>Tolosa T.</AuthorText>
                </Info>
                <Info>
                    <Image
                        src={require("../../../../assets/icons/user/clock.svg")}
                    />
                    <AuthorText>July 12</AuthorText>
                </Info>
            </ArticleInfoWrapper>
            <ArticleTitle>{header.title}</ArticleTitle>
            <MainImage src={`${process.env.NEXT_PUBLIC_HOST}${header.mainMedia.url}`}/>
      
        </>
    );
}

export default ArticleHeader;