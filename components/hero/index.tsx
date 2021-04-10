import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import TabbedForms from "./tab";

const SlogganWrapper = styled("div")`
display; flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
align-self: center;
width: 890px;
`;

const Slogan = styled("h1")`
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: #ffffff;
`;

const HomeSlogan = styled(Slogan)`
  margin: 45px 0px;
`;

const CenteredSlogan = styled(Slogan)`
  text-align: center;
  margin: 10px 0px;
`;

const Description = styled("p")`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  margin: 10px 0px;
`;

const Breadcrump = styled("h2")`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #e45397;
  margin: 10px 0px;
  &::firstline {
    text-transform: uppercase;
  }
`;

const HomeHero = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 60px 0px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 52.87%),
    url(${require("../../assets/images/heros/Landing.png")});
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  margin: 0px 0px;
`;

const SloganButton = styled("button")`
  width: 219px;
  height: 34px;
  background: #e45397;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 30px 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  border-color: transparent;
  vertical-align: middle;
`;

const Hero = () => {
  const router = useRouter();
  let slogan;
  let backgroundUrl = `${require("../../assets/images/heros/services.jpg")}`;
  let description =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.";
  if (router.pathname === "/services") {
    slogan = "Best Service, Right Time, Right People.";
    backgroundUrl = `${require("../../assets/images/heros/services.jpg")}`;
  } else if (router.pathname === "/corporate") {
    slogan = "Corporate Travel Management - Made Simple!";
    backgroundUrl = `${require("../../assets/images/heros/Corporate.jpg")}`;
    description = "Let us take care of your enterprise travel.";
  }
  const HeroWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 60px 0px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    margin: 0px 0px;
  `;
  const navigatedLink = router.pathname.replace(/\\|\//g, "");
  return (
    <>
      {router.pathname === "/" ? (
        <HomeHero>
          <HomeSlogan>Life is a journey. Enjoy it with Taxiye.</HomeSlogan>
          <TabbedForms />
        </HomeHero>
      ) : (
        <HeroWrapper>
          <SlogganWrapper>
            <Breadcrump>
              {`Home / ${navigatedLink
                .charAt(0)
                .toUpperCase()}${navigatedLink.slice(1)}`}
            </Breadcrump>
            <CenteredSlogan>{slogan}</CenteredSlogan>
            <Description>{description}</Description>
            {router.pathname === "/corporate" ? (
              <SloganButton>Sign up for your company</SloganButton>
            ) : null}
          </SlogganWrapper>
        </HeroWrapper>
      )}
    </>
  );
};

export default Hero;
