/* eslint-disable arrow-body-style */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const NavWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 50px 5px 60px;
  height: 65px;
  background: #ffffff;
`;
const Avatar = styled("img")`
  height:20px;
  width:20px;
  margin-right:5px;
`;



const Button = styled("button")`
  background: #f7d259;
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
  color: #444444;
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
  color: #444444;
  padding: 5px 20px;
  &&.active {
    height: 29px;
    border: 1px solid #A02167;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;
const SecondaryNavLink = styled(NavLink)`
 display:flex;
`;
const NavBar = () => {
  const router = useRouter();
  return (
    <NavWrapper>
      <Link href="/">
        <Image
          width="97px"
          height="auto"
          src={require("../../assets/images/logo/logo.svg")}
        />
      </Link>
      <Nav>
        <Link href="/signup"><Button> {"Become a driver"} </Button></Link>
        <Link href="/services">
          <NavLink className={router.pathname === "/services" ? "active" : null}>
            Services
          </NavLink>
        </Link>
        <Link href="/corporate">
          <NavLink
            className={router.pathname === "/corporate" ? "active" : null}
          >
            {" "}
            Corporate
          </NavLink>
        </Link>
        <Link href="/articles">
          <NavLink
            className={router.pathname === "/articles" ? "active" : null}
          >
            Articles
          </NavLink>
        </Link>
        <Link href="/contact-us">
          <NavLink className={router.pathname === "/contact-us" ? "active" : null}>
            Contact us
          </NavLink>
        </Link>
        <Link href="/about-us">
          <NavLink className={router.pathname === "/about-us" ? "active" : null}>
            About us{" "}
          </NavLink>
        </Link>
        <Link href="/login">
          <SecondaryNavLink>
            <Avatar src={require("../../assets/icons/user/Vector.png")}/>
            <div>Login</div>
          </SecondaryNavLink>
        </Link>
      </Nav>
    </NavWrapper>
  );
};

export default NavBar;
