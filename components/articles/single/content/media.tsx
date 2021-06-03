import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const Container = styled("div")`
text-align: center;
padding-top:30px;
`;

const CustomLink = styled("a")`
color:#A02167;
`;

const Figure = styled("figure")`
display: inline-block;
margin:0px;
`;
const Caption = styled("figcaption")`
width: 540px;
font-family: Open Sans;
font-style: italic;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #2A2A2A;
text-align: start;
padding:10px 20px 0px 20px;
&:before {
    content: "";
    height: 31px;
    width: 1px;
    background-color: #C31815;
    position: absolute;
    margin-left: -10px;
    transform: translate(-50%, 50%);

  }
`;

const Image = styled("img")`
width: 560px;
/*height: 319px;*/
`;


const Quote = ({ media }) => {
    return (
        <>
            <Container>
                <Figure>
                    <Image src={`${process.env.NEXT_PUBLIC_HOST}${media.media.url}`} />
                    <Caption>{media.caption}<CustomLink href="/">{media.meta}</CustomLink></Caption>
                </Figure>
            </Container>
        </>
    );
}

export default Quote;