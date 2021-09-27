import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import theme from "../../theme/main";
import NavBar from "./nabvar";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { menuSelected } from "../../redux/actions/navigation";
import { AlertTitle } from "@material-ui/lab";
import TopBar from "./topbar";

const Header = styled("div")`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index:100;
`;

const Menus = styled("a")``;

const MenuItemContainer = styled("div")`
  background-color: ${theme.colors.white};
  height: 300px;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  margin-top: 60px;
`;

const HeaderLogo = styled("div")`
  box-sizing: border-box;
  font-size: 25px;
  font-weight: bold;
  float: left;
  color: black;
  text-align: center;
  padding: 0px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
`;

const RightHeader = styled("div")`
  float: right;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
`;
const MenuIconContainer = styled("div")`
  display: inline-block;
  cursor: pointer;
`;
const Bar = styled("div")`
  width: 35px;
  height: 5px;
  background-color: ${theme.colors.primary};
  margin: 6px 0;
  transition: 0.4s;
`;
const FirstBar = styled(Bar)``;
const SecondBar = styled(Bar)``;
const ThirdBar = styled(Bar)``;

const MobileHeader = ({ className }) => {
  const active = useSelector((state) => state["navigation"]["isMenuActive"]);
  return (
    <>
      <div>
        <Header className={className}>
          <HeaderLogo>
            <Link key="1" href="/">
              <Image
                width="97px"
                height="40px"
                src={require("../../assets/images/logo/logo.svg")}
              />
            </Link>
          </HeaderLogo>
          <RightHeader>
            <MenuIconContainer
              onClick={() => {  
                store.dispatch(menuSelected(!active));
              }}
            >
              <FirstBar
                className={active ? "first-bar active" : "first-bar"}
              ></FirstBar>
              <SecondBar
                className={active ? "second-bar active" : "second-bar"}
              ></SecondBar>
              <ThirdBar
                className={active ? "third-bar active" : "third-bar"}
              ></ThirdBar>
            </MenuIconContainer>
          </RightHeader>
        </Header>
        <MenuItemContainer
          style={{ width: active ? "100%" : "0px" }}
          className={className}
        >
          <TopBar />
          <NavBar />
        </MenuItemContainer>
      </div>
    </>
  );
};

export default MobileHeader;
