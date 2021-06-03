import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const HeaderWrapper = styled("div")`
 width:500px;
 display:flex;
 justify-content:space-between;
padding:0px 20px;
padding-top:10px;
`;

const FlexContianer = styled("div")`
 display:flex;
 justify-content:space-between;

`;

const Logo = styled("img")`
 height:22px;
 margin:auto;
`;
const BigLogo = styled("img")`
`;
const NavLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #444444;
  &&.active {
    height: 32px;
    border: 1px solid #A02167;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

const Avatar = styled("img")`
  
  margin-right:5px;
`;
const SecondaryNavLink = styled(NavLink)`
 display:flex;
`;
const LeftLogo = styled(Logo)`
 padding-right:20px;
`;
const Text = styled("div")`
 margin:auto;
`;


const TabHeader = () => {
    return (<>
        <HeaderWrapper>
            <FlexContianer>
            <Link href="/">
                <LeftLogo src={require("../../assets/icons/menu.svg")} />
            </Link>

            <Link href="/">
                <Logo src={require("../../assets/icons/home.svg")} />
            </Link>

            </FlexContianer>
            <Link href="/">
                <BigLogo src={require("../../assets/images/logo/logo.svg")} />
            </Link>
            <Link href="/login">
                <SecondaryNavLink>
                    <Avatar src={require("../../assets/icons/user/avatar.svg")} />
                    <Text>Login</Text>
                </SecondaryNavLink>
            </Link>
        </HeaderWrapper>
    </>);
}


export default TabHeader;