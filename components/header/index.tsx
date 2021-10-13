import React from "react";
import styled from "styled-components";
import TopBar from "./topbar";
import NavBar from "./nabvar";
import MobileHeader from "./mobile-header";

const HeaderWrapper = styled("div")`
  height: auto;
  /*position: fixed;*/
  width: 100%;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHeaderWrapper = styled(MobileHeader)`
  height: auto;
  /*position: fixed;*/
  width: 100%;
  z-index: 1;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = (props) => {
  return (
    <>
      <HeaderWrapper className="desktop-view">
        <TopBar menus={props?.data?.topHeaderMenus} />
        <NavBar />
      </HeaderWrapper>
      <MobileHeader menus={props?.data} className="mobile-view"></MobileHeader>
    </>
  );
};

export default Header;
