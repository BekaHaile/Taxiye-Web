import React from "react";
import Sticky from "react-stickynode";
import styled from "styled-components";

import ContactUsContent from '../components/contact-us';


const Contactus = () => {
  return (
    <ContactUsContent/>
  );
};

export default Contactus;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;
