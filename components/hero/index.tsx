import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import theme from "../../theme/main";
import Link from "next/link";

const SlogganWrapper = styled("div")`
display; flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
align-self: center;
margin:auto;
`;

const Slogan = styled("h1")`
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.colors.heroTitleColor};
  @media (max-width: 768px) {
    font-size: 5vw;
    margin: 10px;
    line-height: normal;
  }
`;

const CenteredSlogan = styled(Slogan)`
  text-align: center;
  padding-bottom: 10px;
  @media (max-width: 400px) {
    font-size: 5vw;
  }
`;

const Description = styled("p")`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: ${theme.colors.heroSubTitleColor};
  padding-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 3vw;
    margin: 10px;
    padding-bottom: 0px;
  }
`;

const Breadcrump = styled("h2")`
  margin: auto;
  display: block;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${theme.colors.primary};
  padding-bottom: 10px;
  &::firstline {
    text-transform: uppercase;
  }
  @media (max-width: 400px) {
    font-size: 5vw;
  }
`;

interface Props {
  hero?: any;
  children?: any;
}

const Hero: FunctionComponent<Props> = ({ hero, children }) => {
  const router = useRouter();
  let slogan = hero?.title;
  let backgroundUrl = `${process.env.NEXT_PUBLIC_HOST}${hero?.background?.url}`;
  let description = hero?.subTitle;
  let queryText = "";
  if (hero.text != null) queryText = hero?.text;

  const HeroWrapper = styled("div")`
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    width: auto;
    @media (max-width: 768px) {
      background-repeat: no-repeat !important;
      background-size: 100% 100% !important;
      height: 70vw !important;
      width: auto !important;
      padding-bottom: 10px;
      min-height:40vh;
    }
  `;

  const Container = styled("div")`
    padding-top: 95px;
    margin: auto;
    @media (max-width: 768px) {
      padding-top: 60px;
    }
  `;

  const NavLink = styled.a`
    font-weight: 600;
    line-height: 19px;
    text-align: center;
    color: ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.secondary};
    }
  `;

  let routes = router.asPath.split("/");
  routes.shift();

  const navigatedLink = routes[0].replace(/\\|\//g, "");

  return (
    <>
      <HeroWrapper
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundUrl})`,
          display: `flex`,
          height: `70vh`,
          width: `auto`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        key={queryText}
        id={queryText}
      >
        <Container>
          <SlogganWrapper>
            <Breadcrump>
              {
                <Link href="/">
                  <NavLink>Home</NavLink>
                </Link>
              }
              {` / `}
              {
                <Link href={`/${navigatedLink}`}>
                  <NavLink>
                    {navigatedLink.charAt(0).toUpperCase() +
                      navigatedLink.slice(1)}
                  </NavLink>
                </Link>
              }
              {`
                  ${
                    queryText != ""
                      ? ` / 
                  ${queryText.charAt(0).toUpperCase() + queryText.slice(1)}
                  `
                      : ``
                  }`}
            </Breadcrump>
            <CenteredSlogan>{slogan}</CenteredSlogan>
            <Description>{description}</Description>
            {children}
          </SlogganWrapper>
        </Container>
      </HeroWrapper>
    </>
  );
};

export default Hero;
