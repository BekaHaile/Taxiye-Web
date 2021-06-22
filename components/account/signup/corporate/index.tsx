import React from "react";
import Image from "../../image";
import { ContentWrapper } from "../../elements";
import { useSelector } from "react-redux";


import Company from "./company";
import Credential from "./credential";
import WrapUp from "./wrapup";
import Verification from "./phone-verification";




const Signup = ({ hero }) => {
  const step = useSelector((state) => state["corporate"]["step"]);
  return (
    <>
      <ContentWrapper>
        <Image hero={hero} />
        {step == 2 ?
          <Verification /> :
          step == 3 ?
            <Credential /> :
            step == 4 ?
              <WrapUp /> :
              <Company/>
        }
      </ContentWrapper>
    </>
  );
};

export default Signup;
