import React from "react";
import styled from "styled-components";
import {
  FlexContainer,
  CustomButton,
  ContentContainer,
  HeaderContainer,
  CenteredForm,
  FormContainer,
  InputContainer,
  Title,
  SubTitle,
  CheckBoxContainer,
} from "../../elements";
import { useRouter } from "next/router";
import theme from "../../../../theme/main";
import { Checkbox } from "../../../form/inputs";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import NeedHelp from "../../need-help";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  login,
  addLoginEmail,
  addLoginPassword,
  setKeepMeSignedIn,
} from "../../../../redux/actions/corporate";
import { Loading } from "../../../loading/loading";
import { useEffect } from "react";

const LinkWithLine = styled("a")`
color: ${theme.colors.primary};
padding-left:5px;
}
`;

const CustomSubTitle = styled(SubTitle)`
padding-right:0px;
}
`;

const CustomHeaderFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
}
`;

const LeftAlignedForm = styled(CenteredForm)`

}
`;

const Company = ({ goToSignUp }) => {
  const router = useRouter();
  const login_email = useSelector((state) => state["corporate"]["login_email"]);
  const corporate_detail = useSelector(
    (state) => state["corporate"]["corporate_detail"]
  );
  const login_password = useSelector(
    (state) => state["corporate"]["login_password"]
  );

  const canLogin = useSelector((state) => state["corporate"]["canLogin"]);
  const keepMeSignedIn = useSelector(
    (state) => state["corporate"]["keepMeSignedIn"]
  );
  const loading = useSelector((state) => state["corporate"]["loading"]);
  useEffect(() => {
    if (corporate_detail) {
      
      router.push("/cms");
    }
  }, [corporate_detail]);
  return (
    <>
      {loading ? <Loading /> : null}

      <FormContainer>
        <LeftAlignedForm>
          <HeaderContainer>
            <Title>Company Sign in</Title>
            <CustomHeaderFlexContainer>
              <CustomSubTitle>Don't have an account?</CustomSubTitle>
              <LinkWithLine onClick={goToSignUp}>Sign up</LinkWithLine>
            </CustomHeaderFlexContainer>
          </HeaderContainer>
          <ContentContainer>
            <InputContainer>
              <DefaultInput
                onChange={(event) =>
                  store.dispatch(addLoginEmail(event.target.value))
                }
                value={login_email}
                type="email"
                label="Official Email Address"
                placeholder="your@company.com"
                id="officialemail"
              />
            </InputContainer>
            <InputContainer>
              <DefaultInput
                value={login_password}
                onChange={(event) => {
                  let value = event.target.value;
                  store.dispatch(addLoginPassword(value));
                }}
                type="password"
                label="Password"
                placeholder="your password"
                id="password"
              />
            </InputContainer>

            <CheckBoxContainer>
              <Checkbox
                checked={keepMeSignedIn}
                onClick={(val) => store.dispatch(setKeepMeSignedIn(val))}
                id="1"
                placeholder="Keep me signed in"
              />
            </CheckBoxContainer>

            <CustomButton
              onClick={() => store.dispatch(login())}
              disabled={!canLogin}
            >
              Login
            </CustomButton>

            <NeedHelp />
          </ContentContainer>
        </LeftAlignedForm>
      </FormContainer>
    </>
  );
};

export default Company;
