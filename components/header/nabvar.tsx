/* eslint-disable arrow-body-style */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import theme from "../../theme/main";
import { logoutUser } from "../../redux/actions/user/index";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import LanguageMenu from "./language-menu";

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
const Image = styled("img")`
  width: 97px;
  height: auto;
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
  gap:20px;
  @media (max-width: 1200px) {
    gap:9px;
  }
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
  padding: 5px 0px;
  &&.active {
    height: 32px;
    border: 1px solid ${theme.colors.primary};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px 10px;
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

const NavBar = ({ headerMenus, headerContent }) => {
  const access_token = useSelector((state) => state["user"]["access_token"]);
  const user_data = useSelector((state) => state["user"]["user_data"]);
  const router = useRouter();
  return (
    <NavWrapper>
      <div className="desktop-view">
        <Link key="1" href={headerContent?.link ?? "" }>
          <Image
            src={`${process.env.NEXT_PUBLIC_HOST}${headerContent?.logo?.url}`}
          />
        </Link>
      </div>
      <Nav>
        {headerMenus?.map((menu, key) => {
          if (menu?.key === "becomedriver")
            return (
              <Link key="2" href="/become-driver">
                {router.pathname === "/become-driver" ? (
                  <NavLink className="active"> {menu?.text} </NavLink>
                ) : (
                  <Button> {menu?.text}</Button>
                )}
              </Link>
            );
          else if (menu?.key === "login") {
            let text = menu?.text?.split("/");
            return user_data && access_token ? (
              <div
                onClick={() => {
                  store.dispatch(logoutUser());
                }}
              >
                <SecondaryNavLink>
                  <Avatar src={require("../../assets/icons/user/avatar.svg")} />
                  <div>{text[1]}</div>
                </SecondaryNavLink>
              </div>
            ) : (
              <Link key="8" href="/login">
                <SecondaryNavLink>
                  <Avatar src={require("../../assets/icons/user/avatar.svg")} />
                  <div>{text[0]}</div>
                </SecondaryNavLink>
              </Link>
            );
          } else if (menu?.key === "downloadapp")
            return (
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
            );

          return (
            <Link key="5" href={menu?.link ?? ""}>
              <NavLink
                key={key}
                className={
                  router.pathname === `${menu?.link}` ||
                  router.pathname.includes(`${menu?.link}/`)
                    ? "active"
                    : null
                }
              >
                {menu?.text}
              </NavLink>
            </Link>
          );
        })}

        <LanguageMenu />
      </Nav>
    </NavWrapper>
  );
};

export default NavBar;
