/* eslint-disable arrow-body-style */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import theme from "../../theme/main";

const NavWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px 0px 60px;
  height: 65px;
  background: ${theme.colors.headerColor};
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
`;
const Avatar = styled("img")`
  
  margin-right:5px;
`;



const Button = styled("button")`
  background: #f8b219;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-color: transparent;
  height: 34px;
  margin: 0px 10px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color:${theme.colors.primaryTextColor};;
  padding: 5px 20px;
`;

const Nav = styled("nav")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color:${theme.colors.primaryTextColor};;
  padding: 5px 20px;
  &&.active {
    height: 32px;
    border: 1px solid ${theme.colors.primary};
    box-sizing: border-box;
    border-radius: 5px;
  }
  &:hover {
    color: ${theme.colors.primary};
   
  }
`;
const SecondaryNavLink = styled(NavLink)`
 display:flex;
`;
const NavBar = () => {
  const router = useRouter();
  return (
    <NavWrapper>
      <Link key="1" href="/">
        <Image
          width="97px"
          height="auto"
          src={require("../../assets/images/logo/logo.svg")}
        />
      </Link>
      <Nav>
        <Link key="2" href="/become-driver">
          {router.pathname === "/become-driver" ? 
          <NavLink className="active">Become a driver </NavLink>:
          <Button> {"Become a driver"} </Button> }
         
          </Link>
        <Link key="3" href="/services">
          <NavLink className={router.pathname === "/services" ? "active" : null}>
            Services
          </NavLink>
        </Link>
        <Link  key="4" href="/corporate">
          <NavLink
            className={router.pathname === "/corporate" ? "active" : null}
          >
            {" "}
            Corporate
          </NavLink>
        </Link>
        <Link  key="5" href="/articles">
          <NavLink
            className={router.pathname === "/articles" || router.pathname.includes("/articles/") ? "active" : null}
          >
            Articles
          </NavLink>
        </Link>
        <Link  key="6" href="/contact-us">
          <NavLink className={router.pathname === "/contact-us" ? "active" : null}>
            Contact us
          </NavLink>
        </Link>
        <Link  key="7" href="/about-us">
          <NavLink className={router.pathname === "/about-us" ? "active" : null}>
            About us{" "}
          </NavLink>
        </Link>
        <Link  key="8" href="/login">
          <SecondaryNavLink>
            <Avatar src={require("../../assets/icons/user/avatar.svg")}/>
            <div>Login</div>
          </SecondaryNavLink>
        </Link>
      </Nav>
    </NavWrapper>
  );
};

export default NavBar;
