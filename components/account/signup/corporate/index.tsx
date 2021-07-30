import React from "react";
import Image from "../../image";
import { ContentWrapper } from "../../elements";
import { useSelector } from "react-redux";

import Company from "./company";
import Credential from "./credential";
import WrapUp from "./wrapup";
import Verification from "./phone-verification";
import { useState } from "react";
import LoginPage from "../../login/corporate";

const Signup = ({ hero }) => {
  const step = useSelector((state) => state["corporate"]["step"]);
  const [selection, setSelection] = useState("sign_up");
  return (
    <>
      <ContentWrapper>
        <Image hero={hero} />
        {selection == "sign_in" ? (
          <LoginPage goToSignUp={()=>setSelection("sign_up")}/>
        ) : step == 2 ? (
          <Verification />
        ) : step == 3 ? (
          <Credential />
        ) : step == 4 ? (
          <WrapUp />
        ) : (
          <Company goToLogin={()=>setSelection("sign_in")}/>
        )}
      </ContentWrapper>
    </>
  );
};

export default Signup;
