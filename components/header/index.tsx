import React from "react";
import styled from "styled-components";
import TopBar from "./topbar";
import NavBar from "./nabvar";


const HeaderWrapper = styled("div")`
  height: auto;
  position: fixed;
  width:100%;
  z-index: 1;
  @media (max-width: 768px) {
    display:none;
  }
`;

const Header = () => {
  
  return (
    <>
    <HeaderWrapper>
      <TopBar />
      <NavBar />
    </HeaderWrapper>
    </>
  );
};

export default Header;
