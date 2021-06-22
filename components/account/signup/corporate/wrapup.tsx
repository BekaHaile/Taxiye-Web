import React from "react";
import styled from "styled-components";
import Image from "../../image";
import {
  ContentWrapper,
  FlexContainer,
  CustomButton,
  HeaderContainer,
  CenteredForm,
  FormContainer,
  InputContainer,
  Title,
  SubTitle,
} from "../../elements";
import colors from "../../../../theme/main/colors";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import Link from "next/link";
import { useSelector } from "react-redux";

const CustomTitle = styled(Title)`
padding-bottom:0px;
}
`;

const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:10px;
}
`;

const Text = styled("div")`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #444444;
}
`;

const PrimaryText = styled(Text)`
color: #A02167;
}
`;

const Container = styled("div")`
width:450px;
}
`;

const ContentContainer = styled("div")`
display:flex;
flex-direction:column;
gap:40px;

}
`;

const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;

const WrapUp = () => {
  const admin_full_name = useSelector(
    (state) => state["corporate"]["admin_full_name"]
  );
  const admin_email = useSelector((state) => state["corporate"]["admin_email"]);
  const country_code = useSelector(
    (state) => state["corporate"]["country_code"]
  );
  const phone_no = useSelector((state) => state["corporate"]["phone_no"]);
  const phone_number = `${country_code}${phone_no}`;
  return (
    <>
      <FormContainer>
        <LeftAlignedForm>
          <HeaderContainer>
            <CustomTitle>Welcome, {admin_full_name}!</CustomTitle>
          </HeaderContainer>
          <ContentContainer>
            <Container>
              <SubTitle>
                We have sent a verfication email on your official email address.
                Please verify your details.
              </SubTitle>
            </Container>
            <Container>
              <SubTitle>
                Please remember your Taxiye Corporate app login credentials to
                access your corporate dashboard.
              </SubTitle>
            </Container>
            <Container>
              <CustomFlexContainer>
                <Text>Email Address:</Text>
                <PrimaryText>{admin_email}</PrimaryText>
              </CustomFlexContainer>
              <CustomFlexContainer>
                <Text>Mobile Number:</Text>
                <PrimaryText>{phone_number}</PrimaryText>
              </CustomFlexContainer>
            </Container>

            <Container>
              <Link href="/cms">
                <CustomButton>Go to Dashboard</CustomButton>
              </Link>
            </Container>
          </ContentContainer>
        </LeftAlignedForm>
      </FormContainer>
    </>
  );
};

export default WrapUp;
