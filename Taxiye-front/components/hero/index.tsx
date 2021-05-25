import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";


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
  color: #A02167;
  padding-bottom: 10px;
  &::firstline {
    text-transform: uppercase;
  }
`;

const Hero = ({ hero, children }) => {
  const router = useRouter();
  let slogan = hero.title;
  let backgroundUrl = `${process.env.NEXT_PUBLIC_HOST}${hero.background.url}`;
  let description = hero.subTitle;
  let queryText = "";
  if (hero.text != null)
    queryText = hero.text;

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


  let routes = router.asPath.split("/");
  routes.shift();

  const navigatedLink = routes[0].replace(/\\|\//g, "");

  return (
    <>
      <HeroWrapper >
        <Container>
          <SlogganWrapper>
            <Breadcrump>
              {`Home / 
                  ${navigatedLink.charAt(0).toUpperCase() + navigatedLink.slice(1)}
                  ${queryText != "" ? ` / 
                  ${queryText.charAt(0).toUpperCase() + queryText.slice(1)}
                  `: ``}`}
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
