import React from "react";
import styled from "styled-components";
import Image from "../../login/image";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../login/elements";
import colors from "../.././../theme/main/colors";
import { DefaultInput } from "../../form/input-fields/primary-input";
import Link from "next/link";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;

}
`;

const CustomTitle = styled(Title)`
padding-bottom:0px;
}
`;
const Container = styled("div")`
width:450px;
}
`;
const CustomSubTitle = styled(SubTitle)`
padding-bottom:40px;
}
`;

const LeftAlignedForm = styled(CenteredForm)`
top: 50%;
left: 75.5px;
transform: translate(0%, -50%);
}
`;



const Credential = () => {
    return (
        <>
            <ContentWrapper>
                <Image type="corporate" />
                <FormContainer>
                    <LeftAlignedForm>
                        <HeaderContainer>
                            <CustomTitle>Welcome, John Doe!</CustomTitle>
                        </HeaderContainer>
                        <ContentContainer>
                            <Container>
                            <CustomSubTitle>
                            We have sent a verfication email on your official email address. Please verify your details.
                            </CustomSubTitle>
                            </Container>
                            <Container>
                            <CustomSubTitle>
                            We have sent a verfication email on your official email address. Please verify your details.
                            </CustomSubTitle>
                            </Container>
                            <Container>
                            <CustomSubTitle>
                            We have sent a verfication email on your official email address. Please verify your details.
                            </CustomSubTitle>
                            </Container>


                            <Link href="/cms">
                                <CustomButton>Go to Dashboard</CustomButton>
                            </Link>

                        </ContentContainer>
                    </LeftAlignedForm>
                </FormContainer>
            </ContentWrapper>
        </>
    );
};

export default Credential;
