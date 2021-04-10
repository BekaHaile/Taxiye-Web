import React from "react";
import Sticky from "react-stickynode";
import styled from "styled-components";

import Layout from "../components/common/UI/Layout";
import NavBar from "../components/common/UI/NavBar";
import Hero from "../components/contactus/Hero";
import { navTitles } from "../components/common/NabBarContent";

const Contactus = () => {
  return (
    <Layout title="Contact Us - Taxiye - Always Moving!">
      <Container>
        <Sticky top={0} innerZ={999}>
          <NavBar whiteBG titles={navTitles} />
        </Sticky>
        <Hero />
      </Container>
    </Layout>
  );
};

export default Contactus;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;
