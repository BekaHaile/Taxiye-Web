import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import GlobalStyle from "../theme/global/index";
import Loading from "../components/loading/";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "../redux/store";
import { menuSelected } from "../redux/actions/navigation";
import SnackBar from "../components/modal/snackbar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../theme/main/material_theme";
import themeColor from "../theme/main";
import NProgress from "nprogress";
import DefaultErrorPage from "next/error";

const queryClient = new QueryClient();

const FloatingButton = styled("div")`
  z-index: 3;
`;
const CallLink = styled("a")`
  color: ${themeColor.colors.white};
`;

const IconImage = styled("img")`
  margin-top: 14px;
`;

function toggleFloatingButton(value) {
  if (!value) {
    document.getElementById("text-on-floating-button").className = "hidden";
  } else {
    document.getElementById("text-on-floating-button").className = "";
  }
}
NProgress.configure({
  minimum: 0.3,
  showSpinner: false,
  easing: "ease",
  speed: 200,
  trickleRate: 0.02,
  trickleSpeed: 800,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  // This react hook listens for route changes
  // And until routing finishes it's event
  // Loading will be visible and will be hidden
  // When routing finishes
  React.useEffect(() => {
    const start = () => {
      store.dispatch(menuSelected(false));
      // setLoading(true);
      NProgress.start();
    };
    const end = () => {
      // setLoading(false);
      NProgress.done();
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

  // This react hook checks for scroll event change
  // If scrolling offset in Y direction or vertically less
  // than 10 floating button status will be hidden
  // Else it will be shown on the bottom right side
  React.useEffect(() => {
    window.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset < 10) {
          if (document.getElementById("floating-button"))
            document.getElementById("floating-button").className = "hidden";
          if (document.getElementById("text-on-floating-button"))
            document.getElementById("text-on-floating-button").className =
              "hidden";
        } else {
          if (document.getElementById("floating-button")) {
            document.getElementById("floating-button").className = "";
            store.dispatch(menuSelected(false));
          }
        }
      },
      false
    );
  }, []);

  if (pageProps?.error) return <DefaultErrorPage statusCode={503} />;

  if (
    router.pathname.includes("/login") ||
    router.pathname.includes("/signup") ||
    router.pathname.includes("/booking") ||
    router.pathname.includes("/user") ||
    router.pathname.includes("/cms")
  )
    return (
      <MuiThemeProvider theme={theme}>
        {withOutHeader(loading, pageProps, Component)}
      </MuiThemeProvider>
    );
  return (
    <MuiThemeProvider theme={theme}>
      {withHeader(loading, pageProps, Component)}
    </MuiThemeProvider>
  );
}

function withHeader(loading, pageProps, Component) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Taxiye Always Moving!</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
              rel="stylesheet"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <script
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
            ></script>
          </Head>
          <GlobalStyle />
          {loading ? (
            <Loading />
          ) : (
            <>
              <Header {...pageProps} />

              <div>
                <div
                  onClick={() => toggleFloatingButton(false)}
                  id="text-on-floating-button"
                  className="hidden"
                >
                  <CallLink
                    href={`tel: ${
                      pageProps?.data?.footerContent?.floatButtonPhone ?? ""
                    }`}
                  >
                    {pageProps?.data?.footerContent?.floatButtonText ?? ""}
                  </CallLink>
                </div>
                <FloatingButton
                  onClick={() => toggleFloatingButton(true)}
                  id="floating-button"
                  className="hidden"
                >
                  <IconImage src={require("../assets/icons/call-center.svg")} />
                </FloatingButton>
              </div>
              <Component {...pageProps} />
              <SnackBar />
              <Footer {...pageProps} />
            </>
          )}
        </QueryClientProvider>
      </Provider>
    </>
  );
}
function withOutHeader(loading, pageProps, Component) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Taxiye Always Moving!</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
          ></script>
        </Head>
        <GlobalStyle />
        {loading ? (
          <Loading />
        ) : (
          <>
            <Component {...pageProps} />
            <SnackBar />
          </>
        )}
      </Provider>
    </>
  );
}
