import React from "react";
import styled from "styled-components";
import Image from "next/image";

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



const Socials = () => {
    return (
        <>
            <Title> Follow us </Title>
            <SocialLinkWrapper>
                <Image
                    src={require("../../assets/icons/facebook.png")}
                    width="11px"
                    height="21px"
                />
                <Image
                    src={require("../../assets/icons/twitter.png")}
                    width="26px"
                    height="21px"
                />
                <Image
                    src={require("../../assets/icons/instagram.png")}
                    width="21px"
                    height="21px"
                />
            </SocialLinkWrapper>
        </>
    );
}

export default Socials;