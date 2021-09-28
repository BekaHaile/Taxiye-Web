import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import TabbedForms from "../tab-forms/tab";
import theme from "../../theme/main";

const Slogan = styled("h1")`
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.colors.heroTitleColor};
`;

const HomeSlogan = styled(Slogan)`
  margin-bottom: 45px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 7vw;
  }
`;

const HomeContainer = styled("div")`
  display: inline-block;
  padding-left: 60px;
  margin-top: 95px;
  @media (max-width: 768px) {
    padding-left: 0px;
    margin-top: 0px;
  }
`;

const Hero = ({ hero }) => {
  const router = useRouter();
  let slogan = hero.title;
  let backgroundUrl = `${process.env.NEXT_PUBLIC_HOST}${hero.background.url}`;
  const HomeHero = styled("section")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 52.87%),
      url(${backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    @media (max-width: 768px) {
      background-repeat: no-repeat !important;
      background-size: 100% 55vh !important;
      height: 55vh !important;
      width: auto !important;
    }
  `;

  return (
    <>
      <HomeHero>
        <div>
          <HomeContainer>
            <HomeSlogan>{slogan}</HomeSlogan>
            <div className="desktop-view">
            <TabbedForms />
            </div>
          </HomeContainer>
        </div>
      </HomeHero>
    </>
  );
};

export default Hero;
