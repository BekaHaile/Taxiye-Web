import React from "react";
import styled from "styled-components";
import TopBar from "./topbar";
import NavBar from "./nabvar";
import MobileHeader from "./mobile-header";


const HeaderWrapper = styled("div")`
  height: auto;
  position: fixed;
  width:100%;
  z-index: 1;
  @media (max-width: 768px) {
    display:none;
  }
`;

const MobileHeaderWrapper = styled(MobileHeader)`
  height: auto;
  position: fixed;
  width:100%;
  z-index: 1;
  @media (max-width: 768px) {
    display:block;
  }
`;

const Header = () => {
  
  return (
    <>
    <HeaderWrapper className="desktop-view">
      <TopBar />
      <NavBar />
    </HeaderWrapper>
    <MobileHeader className="mobile-view"></MobileHeader>
    </>
  );
};

export default Header;
