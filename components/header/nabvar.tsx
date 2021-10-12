/* eslint-disable arrow-body-style */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import theme from "../../theme/main";
import { logoutUser } from "../../redux/actions/user/index";
import { useSelector } from "react-redux";
import store from "../../redux/store";

const NavWrapper = styled("div")`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 0px 60px;
    height: 65px;
    background: ${theme.colors.headerColor};
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
  }
  @media (max-width: 768px) {
    width: fit-content;
    padding-top: 20px;
  }
`;
const Avatar = styled("img")`
  margin-right: 5px;
  @media (max-width: 768px) {
    display: none;
  }
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
  color: ${theme.colors.primaryTextColor};
  padding: 5px 20px;

  @media (max-width: 1000px) {
    font-size: 1vw;
  }
  @media (max-width: 768px) {
    margin: 0px;
    font-size: 14px;
    text-align: left;
  }
`;

const Nav = styled("nav")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin: 0px 5px;
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  line-height: 19px;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
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
  @media (max-width: 1000px) {
    font-size: 1vw;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: normal;
    text-align: left;
  }
`;
const SecondaryNavLink = styled(NavLink)`
  display: flex;
`;

const LangLogo = styled("img")`
  width: 20px;
  height: 20px;
`;

const LangLinks = styled("a")`
  color: black;
`;

const NavBar = () => {
  const access_token = useSelector((state) => state["user"]["access_token"]);
  const user_data = useSelector((state) => state["user"]["user_data"]);
  const router = useRouter();
  return (
    <NavWrapper>
      <div className="desktop-view">
        <Link key="1" href="/">
          <Image
            width="97px"
            height="auto"
            src={require("../../assets/images/logo/logo.svg")}
          />
        </Link>
      </div>
      <Nav>
        <div className="mobile-view">
          <Link key="2" href="/become-driver">
            <NavLink
              className={router.pathname === "/become-driver" ? "active" : null}
            >
              Become a driver
            </NavLink>
          </Link>
        </div>
        <div className="desktop-view">
          <Link key="2" href="/become-driver">
            {router.pathname === "/become-driver" ? (
              <NavLink className="active">Become a driver </NavLink>
            ) : (
              <Button> {"Become a driver"} </Button>
            )}
          </Link>
        </div>
        <Link key="3" href="/services">
          <NavLink
            className={router.pathname === "/services" ? "active" : null}
          >
            Services
          </NavLink>
        </Link>
        <Link key="4" href="/corporate">
          <NavLink
            className={router.pathname === "/corporate" ? "active" : null}
          >
            {" "}
            Corporate
          </NavLink>
        </Link>
        <Link key="5" href="/articles">
          <NavLink
            className={
              router.pathname === "/articles" ||
              router.pathname.includes("/articles/")
                ? "active"
                : null
            }
          >
            Articles
          </NavLink>
        </Link>
        <Link key="6" href="/contact-us">
          <NavLink
            className={router.pathname === "/contact-us" ? "active" : null}
          >
            Contact us
          </NavLink>
        </Link>
        <Link key="7" href="/about-us">
          <NavLink
            className={router.pathname === "/about-us" ? "active" : null}
          >
            About us{" "}
          </NavLink>
        </Link>

        {user_data && access_token ? (
          <div
            onClick={() => {
              store.dispatch(logoutUser());
            }}
          >
            <SecondaryNavLink>
              <Avatar src={require("../../assets/icons/user/avatar.svg")} />
              <div>Logout</div>
            </SecondaryNavLink>
          </div>
        ) : (
          <Link key="8" href="/login">
            <SecondaryNavLink>
              <Avatar src={require("../../assets/icons/user/avatar.svg")} />
              <div>Login</div>
            </SecondaryNavLink>
          </Link>
        )}
        <div
          className="mobile-view"
          onClick={() => {
            const element = document.querySelector("#download-app-links");
            const topPos =
              element.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
              top: topPos, // scroll so that the element is at the top of the view
              behavior: "smooth", // smooth scroll
            });
          }}
        >
          <NavLink>Download App</NavLink>
        </div>
        <div className="lang-dropdown">
          <SecondaryNavLink>
            <Avatar src={require("../../assets/icons/globe-icon.svg")} />
            {router.locale}
          </SecondaryNavLink>
          <div className="lang-dropdown-content">
            <Link href={router.asPath} locale="en">
              <LangLinks className={router.locale == "en" ? "active" : null}>
                English
              </LangLinks>
            </Link>
          </div>
        </div>
      </Nav>
    </NavWrapper>
  );
};

export default NavBar;
