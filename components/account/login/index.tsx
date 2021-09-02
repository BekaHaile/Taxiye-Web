import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import { reset, changeStep, submitPhoneNumber, submitOtp } from "../../../redux/actions/user";
import { Loading } from "../../loading/loading";

import PhoneInput from "./phone-input";
import VerificationForm from "./phone-verification";
import SignupForm from "./signup";

const Login = ({ hero }: any) => {
  const step = useSelector((state) => state["user"]["step"]);
  const loading = useSelector((state) => state["user"]["loading"]);

  const router = useRouter();

  useEffect(() => {
    if (step != 1) {
      store.dispatch(reset());
    }

  }, [router.asPath]);

  return (
    <>
      {
        loading ?
          <Loading /> : null}
      {
        step == 3 ? <SignupForm hero={hero} action={() => store.dispatch(changeStep(step + 1))} /> :
          step == 2 ? <VerificationForm
            hero={hero} goBack={() => store.dispatch(changeStep(step - 1))}
            action={() => store.dispatch(submitOtp())}

          /> :
            <PhoneInput
              hero={hero}
              action={() => {
                store.dispatch(submitPhoneNumber());
              }
              } />
      }

    </>
  );
};

export default Login;
