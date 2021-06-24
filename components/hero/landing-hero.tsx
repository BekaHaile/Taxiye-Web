import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import TabbedForms from "../tab-forms/tab";

const Slogan = styled("h1")`
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: #ffffff;
`;

const HomeSlogan = styled(Slogan)`
  margin-bottom: 45px;
`;

const HomeContainer = styled("div")`
  display: inline-block;
  padding-left: 60px;
  margin-top: 95px;
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
  `;

  return (
    <>
      <HomeHero>
        <div>
          <HomeContainer>
            <HomeSlogan>{slogan}</HomeSlogan>
            <TabbedForms />
          </HomeContainer>
        </div>
      </HomeHero>
    </>
  );
};

export default Hero;
