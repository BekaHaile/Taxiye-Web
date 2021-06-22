import React from "react";
import styled from "styled-components";
import { FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../elements";
import colors from "../../../../theme/main/colors";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Link from "next/link";
// import NeedHelp from "../../terms";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { initiateSubmitAdminData, addFullName, addAdminEmail, addPassword, addConfirmationPassword } from "../../../../redux/actions/corporate";
import { Loading } from "../../../loading/loading";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;

}
`;

const CustomSubTitle = styled(SubTitle)`
padding-right:0px;
}
`;

const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
gap:60px;
}
`;

const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;



const Credential = () => {

  const admin_full_name = useSelector((state) => state["corporate"]["admin_full_name"]);
  const admin_email = useSelector((state) => state["corporate"]["admin_email"]);
  const password = useSelector((state) => state["corporate"]["password"]);
  const confirmation_password = useSelector((state) => state["corporate"]["confirmation_password"]);
  const isAdminValid = useSelector((state) => state["corporate"]["isAdminValid"]);
  const loading = useSelector((state) => state["corporate"]["loading"]);
  return (
    <>
      {
        loading ?
          <Loading /> : null}
      <FormContainer>
        <LeftAlignedForm>
          <HeaderContainer>
            <Title>Almost Done!</Title>
            <CustomSubTitle>Please provide the following details to get started.</CustomSubTitle>

          </HeaderContainer>
          <ContentContainer>

            <CustomFlexContainer>
              <InputContainer>
                <DefaultInput
                  value={admin_full_name}
                  onChange={(event) => {
                    let value = event.target.value;
                    store.dispatch(addFullName(value))
                  }
                  }
                  label="Your Full Name *"
                  placeholder="John doe"
                  id="fullname" />
              </InputContainer>

              <InputContainer>
                <DefaultInput
                  value={admin_email}
                  onChange={(event) => {
                    let value = event.target.value;
                    store.dispatch(addAdminEmail(value))
                  }
                  }
                  type="email"
                  label="Your Email Address *"
                  placeholder="johndoe@gmail.com"
                  id="youremail" />
              </InputContainer>
            </CustomFlexContainer>

            <CustomFlexContainer>
              <InputContainer>
                <DefaultInput
                  value={password}
                  onChange={(event) => {
                    let value = event.target.value;
                    store.dispatch(addPassword(value))
                  }
                  }
                  type="password"
                  label="Password *"
                  placeholder="********"
                  id="phonenumber" />
              </InputContainer>

              <InputContainer>
                <DefaultInput
                  value={confirmation_password}
                  onChange={(event) => {
                    let value = event.target.value;
                    store.dispatch(addConfirmationPassword(value))
                  }
                  }
                  type="password"
                  label="Confirm Password *"
                  placeholder="********"
                  id="employeenumber" />
              </InputContainer>
            </CustomFlexContainer>


            <CustomButton disabled={!isAdminValid} onClick={() => store.dispatch(initiateSubmitAdminData())}>Get Started</CustomButton>

          </ContentContainer>
        </LeftAlignedForm>
      </FormContainer>
    </>
  );
};

export default Credential;
