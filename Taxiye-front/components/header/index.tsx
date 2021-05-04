import React from "react";
import styled from "styled-components";
import TopBar from "./topbar";
import NavBar from "./nabvar";


const HeaderWrapper = styled("div")`
  height: auto;
  position: fixed;
  width:100%;
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
