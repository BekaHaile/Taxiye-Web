import React from "react";
import styled from "styled-components";


const BottomLinkWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
 
`;
const SocialLinkWrapper = styled(BottomLinkWrapper)`
  width: 100px;
`;

const Title = styled("p")`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 150%;
text-transform: uppercase;
color: #979797;
`;
const Image = styled("img")`

`;


const Socials = () => {
    return (
        <>
            <Title> Follow us </Title>
            <SocialLinkWrapper>
                <Image
                    src={require("../../assets/icons/brand-facebook.svg")}
                   
                />
                <Image
                    src={require("../../assets/icons/brand-twitter.svg")}
                  
                />
                <Image
                    src={require("../../assets/icons/brand-instagram.svg")}
                    
                />
            </SocialLinkWrapper>
        </>
    );
}

export default Socials;