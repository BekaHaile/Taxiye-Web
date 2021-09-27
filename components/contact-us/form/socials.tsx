import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";



const BottomLinkWrapper = styled("div")`
  display: flex;
  align-self: flex-end;
  @media (max-width: 768px) {
    justify-content:center;
  }
`;
const SocialLinkWrapper = styled(BottomLinkWrapper)`
 
`;

const Title = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 150%;
text-transform: uppercase;
color: ${theme.colors.secondaryTextColor};
padding-bottom: 8px;

`;
const Image = styled("img")`
padding-right:10px;
`;
const Link = styled("a")`

`;


const Socials = ({ socialMedias }) => {
    return (
        <>
            <Title> Follow us </Title>
            <SocialLinkWrapper>
                {socialMedias.map((socialMedia, index) => (
                    <Link  key={index} href={`${socialMedia.link}`}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_HOST}${socialMedia.logo.url}`}
                        />
                    </Link>
                ))}


            </SocialLinkWrapper>
        </>
    );
}

export default Socials;