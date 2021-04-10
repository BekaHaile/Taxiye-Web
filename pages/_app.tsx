import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Header from "../components/header";
import Banner from "../components/hero";
import Footer from "../components/footer";

const GlobalStyle = createGlobalStyle`
  html,body {
    height: 100%;
    width: 100%;
    margin:0;
    padding:0;
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
    color: #E45397 !important;
    background: transparent;
  }

  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
  }

  .rec-dot.rec-dot_active {
    background-color: #E45397 !important;
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
