import React from "react";
import styled from "styled-components";
import { Button } from "../../../form/buttons/primary-button";
import { ContentWrapper, FlexContainer, CustomButton, ContentContainer, HeaderContainer, CenteredForm, FormContainer, InputContainer, Title, SubTitle } from "../../elements";
import colors from "../../../../theme/main/colors";
import { PhoneInput } from "../../../form/input-fields/phone-input";
import { DefaultInput } from "../../../form/input-fields/primary-input";
import {GenderDropDown, CountryDropDown} from "../../../form/dropdown/drop-down";

const LinkWithLine = styled("a")`
color:${colors.primary};
padding-left:5px;

}
`;

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}
`;
const InputContainerWithSpace = styled(InputContainer)`
padding-right:60px;
}
`;
const CustomFlexContainer = styled(FlexContainer)`
padding-bottom:0px;
justify-content: center;
}
`;

const LeftAlignedForm = styled("div")`
width: fit-content;
}
`;



const Signup = ({ handleNext, activeStep, steps }) => {
    return (
        <>

            <LeftAlignedForm>
                <CustomHeaderContainer>
                    <Title>Driver Information</Title>
                    <SubTitle>Please provide the following details to get started.</SubTitle>

                </CustomHeaderContainer>
                <ContentContainer>

                    <CustomFlexContainer>
                        <InputContainerWithSpace>
                            <DefaultInput
                                label="Full *"
                                placeholder="your full name"
                                id="fullname" />
                        </InputContainerWithSpace>

                        <InputContainer>
                            <GenderDropDown
                                label="Gender *"
                                placeholder="Select Gender"
                                id="gender" />
                        </InputContainer>
                    </CustomFlexContainer>

                    <CustomFlexContainer>
                        <InputContainerWithSpace>
                            <CountryDropDown
                                label="Country *"
                                placeholder="Ethiopia"
                                id="country" />
                        </InputContainerWithSpace>

                        <InputContainer>
                            <PhoneInput
                                label="Phone Number *"
                                placeholder="your phone number"
                                id="phonenumber" />

                        </InputContainer>
                    </CustomFlexContainer>
                    <FlexContainer>
                    <Button onClick={handleNext}>
                        Continue
                    </Button>
                    </FlexContainer>
                    <FlexContainer>
                        <SubTitle>Need help?</SubTitle>
                        <LinkWithLine href="/">Click here</LinkWithLine>

                    </FlexContainer>
                </ContentContainer>
            </LeftAlignedForm>

        </>
    );
};

export default Signup;
