import React from "react";
import Image from "../../image";
import { ContentWrapper } from "../../elements";
import { useSelector } from "react-redux";


import Company from "./company";
import Credential from "./credential";
import WrapUp from "./wrapup";
import Verification from "./phone-verification";




const Signup = ({ hero }) => {
  const page = useSelector((state) => state["navigation"]["page"]);
  return (
    <>
      <ContentWrapper>
        <Image hero={hero} />
        {page == "corporate-verify" ?
          <Verification /> :
          page == "corporate-credential" ?
            <Credential /> :
            page == "corporate-wrapup" ?
              <WrapUp /> :
              <Company/>
        }
      </ContentWrapper>
    </>
  );
};

export default Signup;
