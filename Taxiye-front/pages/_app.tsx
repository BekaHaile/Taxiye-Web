import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Header from "../components/header";
import Banner from "../components/hero";
import Footer from "../components/footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import colors from "../theme/main/colors";




const GlobalStyle = createGlobalStyle`
body, html {
  height: 100%;
  margin: 0 !important;
  
}

.intl-tel-input.allow-dropdown input[type=tel] {
  padding-left:95px;
  height:39px;
  width:350px;
  border: 2px solid #ccc;
  border-radius:4px;
  margin-top:10px;
}
.intl-tel-input .flag-container .arrow.down:after {
  content: url(${require("../assets/icons/phone-dropdown.svg")});
}
.intl-tel-input.allow-dropdown .selected-flag {
  width: 60px;
}
.intl-tel-input .flag-container .arrow.up:after {
  content: url(${require("../assets/icons/phone-dropdown.svg")});
  display: inline-block;
  transform: rotate(180deg);
}

.intl-tel-input {
  margin-top: 10px; 
}
.intl-tel-input.allow-dropdown input[type=tel]:focus {
  
  border: 2px solid ${colors.primary};
  border-radius:4px;
  
  outline:none;
}

.rec-item-wrapper{
  padding:0px !important;
}
.rec-pagination{
  padding-top:25px;
  margin:0px;
}

.kGrYtS {
 
  margin-top: 0px !important;
}
/*
.rec-carousel-item{
  padding-top:60px;
  z-index:10px;

}

div:nth-of-type(even).rec-carousel-item-visible {
  background: blue;
}
*/

.rec-carousel-wrapper {
  padding-top:60px;

}

.react-tel-input .flag-dropdown {
 border-right:none;
 background-color:#fff;
 -webkit-border-radius: 3px 0 0 3px;
border-radius: 5px 0 0 5px;
}
p,h1,h2,h3,h4,h5,h6{
  margin:0px;
  padding:0px;
}

.react-tel-input .form-control {
  width:100px;
  height: 45px;
  border-right:none;
  border-radius: 5px 0px 0px 5px;
  pointer-events: none;
}
.react-tel-input .selected-flag .arrow {
  width: 8px;
  margin-left: 4px;
}
.react-tel-input {
  font-family: 'Open',sans-serif;
  
  width: 100px;
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

const FloatingButton = styled("div")`
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:38px;
	background-color:#A02167;
	border-radius:50px;
	text-align:center;

`;

const IconImage = styled("img")`
margin-top:18px;
`;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.includes("/login"))
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
      <FloatingButton><IconImage src={require("../assets/icons/call-center.svg")}/></FloatingButton>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
