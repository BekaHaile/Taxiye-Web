import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from "../theme/global/index";
import Loading from "../components/loading/";

const FloatingButton = styled("div")`
`;

const IconImage = styled("img")`
margin-top:14px;
`;

function toggleFloatingButton(value) {

  if (!value) {

    document.getElementById("text-on-floating-button").className = "hidden";
  }
  else {
    document.getElementById("text-on-floating-button").className = "";
  }
}

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset < 10) {
        if(document.getElementById("floating-button"))
        document.getElementById("floating-button").className = "hidden";
        if(document.getElementById("text-on-floating-button"))
        document.getElementById("text-on-floating-button").className = "hidden";
      }
      else {
        if(document.getElementById("floating-button"))
        document.getElementById("floating-button").className = "";
      }

    }, false);

  }, []);

  if (router.pathname.includes("/login")
    || router.pathname.includes("/signup")
    || router.pathname.includes("/booking")
  )
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
        {loading ?
          <Loading /> :
          <>
            <Component {...pageProps} />
          </>
        }
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
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <GlobalStyle />
      {loading ?
        <Loading /> :
        <>
          <Header />
          <div>
            <div onClick={() => toggleFloatingButton(false)} id="text-on-floating-button" className="hidden">
              Call Us On 6055
        </div>
            <FloatingButton onClick={() => toggleFloatingButton(true)} id="floating-button" className="hidden">
              <IconImage src={require("../assets/icons/call-center.svg")} />
            </FloatingButton>
          </div>
          <Component {...pageProps} />
          <Footer />
        </>
      }
    </>
  );
}
