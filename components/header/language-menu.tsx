import React from "react";
import styled from "styled-components";
import Link from "next/link";
import theme from "../../theme/main";
import { useRouter } from "next/router";

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

const LangLinks = styled("a")`
  color: black;
`;

const Avatar = styled("img")`
  margin-right: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const router = useRouter();
  const selectedCountry = "";
  const countriesList = process?.env?.NEXT_PUBLIC_COUNTRY_LIST?.split(",");
  const urlList = process?.env?.NEXT_PUBLIC_COUNTRY_URL_LINKS.split(",");
  return (
    <>
      <div className="country-dropdown">
        <SecondaryNavLink>
          <Avatar src={require("../../assets/icons/globe-icon.svg")} />
          {selectedCountry}
        </SecondaryNavLink>
        <div className="country-dropdown-content">
          {countriesList?.map((country, index) => (
            <LangLinks
              href={urlList[index]}
              className={country == selectedCountry ? "active" : null}
            >
              {country}
            </LangLinks>
          ))}
        </div>
      </div>
      <div className="lang-dropdown">
        <SecondaryNavLink>
          <Avatar src={require("../../assets/icons/lang-logo.svg")} />
          {router.locale}
        </SecondaryNavLink>
        <div className="lang-dropdown-content">
          {router?.locales?.map((lang) => (
            <Link href={router.asPath} locale={lang}>
              <LangLinks className={router.locale == lang ? "active" : null}>
                {lang}
              </LangLinks>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
