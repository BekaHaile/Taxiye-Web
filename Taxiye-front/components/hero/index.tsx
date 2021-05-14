import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import TabbedForms from "./tab";
import { Form, SecondaryInputs } from "../form/inputs";
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
  color: #ffffff;
`;

const HomeSlogan = styled(Slogan)`
  margin-bottom: 45px;
`;

const CenteredSlogan = styled(Slogan)`
  text-align: center;
  padding-bottom: 10px;
`;

const Description = styled("p")`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 30px;
`;

const Breadcrump = styled("h2")`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #A02167;
  padding-bottom: 10px;
  &::firstline {
    text-transform: uppercase;
  }
`;

const HomeHero = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 52.87%),
    url(${require("../../assets/images/heros/Landing.png")});
  background-repeat: no-repeat;
  background-size: cover;
  height:700px;
  width:auto;
`;
const HomeContainer = styled("div")`
display: inline-block;
padding-left:60px;
margin-top:95px;

`;

const SloganButton = styled("button")`
background: #A02167;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding: 5px 20px;
line-height: 19px;
text-align: center;
color: #ffffff;
border-color: transparent;
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
/* identical to box height */

text-align: center;

`;

const Hero = () => {
  const router = useRouter();
  let height = "550px";
  let slogan;
  let backgroundUrl = `${require("../../assets/images/heros/services.jpg")}`;
  let description =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.";

  if (router.pathname === "/") {
    height = "700px";
  }
  if (router.pathname === "/services") {
    slogan = "Best Service, Right Time, Right People.";
    backgroundUrl = `${require("../../assets/images/heros/services.jpg")}`;
  } else if (router.pathname === "/corporate") {
    slogan = "Corporate Travel Management - Made Simple!";
    backgroundUrl = `${require("../../assets/images/heros/Corporate.jpg")}`;
    description = "Let us take care of your enterprise travel.";
  }
  else if (router.pathname === "/articles") {
    backgroundUrl = `${require("../../assets/images/heros/Articles.jpg")}`;
    slogan = "Latest Articles and Updates";
    description = "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor";

  }
  else if (router.pathname === "/articles/[id]") {
    const id = router.query.id;
    backgroundUrl = `${require("../../assets/images/heros/Articles.jpg")}`;
    slogan = id;
    description = "";

  }
  else if (router.pathname === "/contact-us") {
    slogan = "We would love to here from you.";
    backgroundUrl = `${require("../../assets/images/heros/Contact-us.jpg")}`;
    description = "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor";
  }
  else if (router.pathname === "/about-us") {
    slogan = "A little bit about us.";
    backgroundUrl = `${require("../../assets/images/heros/About-us.jpg")}`;
    description = "get to know us better.";
  }
  else if (router.pathname === "/signup") {
    slogan = "Make Money. Earn Respect. Secure Your Future.";
    backgroundUrl = `${require("../../assets/images/heros/services.jpg")}`;
    description = "Apply now to become a Taxiye driver-partner. ";
  }

  const HeroWrapper = styled("div")`
    display: flex;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
    height:550px;
    width:100%;
  `;

  const Container = styled("div")`
 
  padding-top:95px;
  margin:auto;
`;

const SearchContainer = styled("div")`
width:400px;
margin:auto;
`;


  let routes = router.asPath.split("/");
  routes.shift();
console.log(routes);
  const navigatedLink = router.pathname.replace(/\\|\//g, "");

  return (
    <>

      {router.pathname === "/" ? (
        <HomeHero>
          <div>
            <HomeContainer>
              <HomeSlogan>Life is a journey. Enjoy it with Taxiye.</HomeSlogan>
              <TabbedForms />
            </HomeContainer>
          </div>
        </HomeHero>
      ) : (
        <HeroWrapper >
          <Container>
            <SlogganWrapper>
              <Breadcrump>
                {`Home / 
                  ${routes.map(route => route.charAt(0).toUpperCase()+route.slice(1))}
                  `}
              </Breadcrump>
              <CenteredSlogan>{slogan}</CenteredSlogan>
              <Description>{description}</Description>
              {router.pathname === "/corporate" ? (
                <Link href="/signup/corporate">
                  <SloganButton>Sign up for your company</SloganButton>
                </Link>
              ) : router.pathname === "/articles" ? (
                <SearchContainer>
                <SecondaryInputs
                  id="location"
                  placeholder="Search..."
                  icon={require("../../assets/icons/search.svg")}
                />
                </SearchContainer>
              ) : router.pathname === "/become-driver" ? (
                <Link href="/signup/driver">
                  <SloganButton>Get started</SloganButton>
                </Link>
              ) : null}
            </SlogganWrapper>
          </Container>
        </HeroWrapper>
      )}

    </>
  );
};

export default Hero;
