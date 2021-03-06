import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../theme/main";
import { ShareSocial } from "react-share-social";
import Modal from "../modal/secondary";
import id from "date-fns/esm/locale/id/index.js";

const FormattedLinks = styled.a`
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #ababab;
  text-decoration: none;
  padding: 5px;
  &:after {
    margin-left: 10px;
    content: "";
    border: 1px solid #ababab;
  }
  &:hover {
    color: ${theme.colors.primary};
  }

  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;
const Container = styled("div")`
  background: ${theme.colors.topHeaderColor};
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0px 60px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: auto;
    justify-content: start;
    padding: 0px 20px;
  }
`;

const CornerLink = styled(FormattedLinks)`
  &:after {
    border: none;
  }
`;

const TopBar = ({ menus }) => {
  const [show, setShow] = useState(false);
  const [siteUrl, setSiteUrl] = useState("");
  useEffect(() => {
    let urlLInk = window.location.href;
    setSiteUrl(urlLInk);
  }, []);

  return (
    <>
      <Container>
        {menus?.map((menu, index) => {
          if (menu?.key === "downloadapp")
            return (
              <div
                onClick={() => {
                  const element = document.querySelector("#download-app-links");
                  const topPos =
                    element.getBoundingClientRect().top + window.pageYOffset;

                  window.scrollTo({
                    top: topPos, // scroll so that the element is at the top of the view
                    behavior: "smooth", // smooth scroll
                  });
                }}
              >
                <FormattedLinks className="desktop-view">
                  {menu?.text}
                </FormattedLinks>
              </div>
            );
          else if (menu?.key === "share")
            return (
              <FormattedLinks onClick={() => setShow(true)}>
                {menu?.text}
              </FormattedLinks>
            );
          else if (menu?.key === "support")
            return (
              <>
                <div className="mobile-view">
                  <Link href="support">
                    <FormattedLinks>{menu?.text}</FormattedLinks>
                  </Link>
                </div>
                <div className="desktop-view">
                  <Link href="support">
                    <FormattedLinks>{menu?.text}</FormattedLinks>
                  </Link>
                </div>
              </>
            );
          else if (index === menus?.length - 1)
            return (
              <CornerLink className="desktop-view">{menu?.text}</CornerLink>
            );
          return (
            <FormattedLinks
              key={index}
              href={menu?.link}
              target={menu?.link != "/" ? "_blank" : ""}
            >
              {menu?.text}
            </FormattedLinks>
          );
        })}
      </Container>
      <Modal onClose={() => setShow(false)} show={show}>
        <ShareSocial
          url={siteUrl}
          socialTypes={["facebook", "twitter", "reddit", "linkedin", "email"]}
        />
      </Modal>
    </>
  );
};

export default TopBar;
