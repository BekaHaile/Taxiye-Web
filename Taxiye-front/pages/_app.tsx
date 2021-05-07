import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Header from "../components/header";
import Banner from "../components/hero";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import 'react-phone-number-input/style.css'

import "slick-carousel/slick/slick-theme.css";


const GlobalStyle = createGlobalStyle`
body, html {
  height: 100%;
  margin: 0 !important;
  
}

.slick-current {
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  transform: scale(1.25);    
}

.slick-list { 
  padding:30px 0px !important;
  margin:0px 60px;
}

.slick-prev:before,
.slick-next:before {
  color: #A02167;
}

.slick-dots li.slick-active button:before {
  opacity: .75;
  color: #A02167;
}
.slick-dots li button:before {

  opacity: .25;
  color: #A02167;

  font-size: x-small;

}

  html,body {
    height: 100%;
    width: 100%;
    margin:0px;
    padding:0px;
    background: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
  }
  a, button, img {
    cursor: pointer;
  }
  .rec.rec-arrow, .rec-arrow-right:hover:enabled, .rec-arrow-right:focus:enabled,  rec-arrow-left:hover:enabled, .rec-arrow-leftfocus:enabled {
    border: none;
    width: 0;
    height: 0;
    color: #A02167 !important;
    background: transparent;
  }

  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
  }

  .rec-dot.rec-dot_active {
    background-color: #A02167 !important;
    width: 7px;
    height: 7px;
    box-shadow: none;
  }

  .rec-dot {
    width: 7px !important;
    height: 7px !important;
    box-shadow: none !important;
    background-color: #979797 !important;
  }
  
`;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === "/login")
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>)
      ;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
