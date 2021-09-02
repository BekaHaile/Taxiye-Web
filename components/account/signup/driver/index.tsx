import React from "react";
import Image from "../../image";
import theme from "../../../../theme/main";
import { ContentWrapper, CustomButton, FormContainer } from "../../elements";
import Stepper from "../stepper";
import styled from "styled-components";

import { Loading } from "../../../loading/loading";
import { useSelector } from "react-redux";



const Signup = ({ hero }) => {
  const loading = useSelector((state) => state["driver"]["loading"]);

  return (
    <>
      {loading ? <Loading /> : null}
      <ContentWrapper>
        <Image hero={hero} />
        <FormContainer>
          <Stepper />
        </FormContainer>

        </ContentWrapper>
    </>
  );
};

export default Signup;
