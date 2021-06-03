import React, { useState } from "react";
import { ContentWrapper, CustomButton, ContentContainer, HeaderContainer, FlexContainer, FormContainer, Avatar, NavLink, Title, SubTitle, InputContainer } from "../../elements";
import styled from "styled-components";
import Link from "next/link";
const LeftAlignedForm = styled("div")`
width: fit-content;
padding-top:30px;
}
`;
const CustomSubTitle = styled(SubTitle)`
width: 500px;
}
`;

const CustomHeaderContainer = styled(HeaderContainer)`
padding-bottom:40px;
}`;

const CustomTitle = styled(Title)`
color: #20AA46;
}`;
const FlexContainerWithGap = styled(FlexContainer)`
gap:30px;
}`;




const End = () => {
    return (
        <>
            <ContentWrapper>
                <LeftAlignedForm>

                    <CustomHeaderContainer>
                        <CustomTitle>Congratulations!</CustomTitle>
                        <CustomSubTitle>Your Information and documents are successfully uploaded, Please wait for approval.</CustomSubTitle>
                    </CustomHeaderContainer>
                    <FlexContainerWithGap>
                        <Link href="/"><CustomButton>Go Home</CustomButton></Link>
                        <Link href="/"><CustomButton>Support Center</CustomButton></Link>
                        <Link href="/contact-us"><CustomButton>Contact us</CustomButton></Link>
                    </FlexContainerWithGap>
                </LeftAlignedForm>
            </ContentWrapper>

        </>
    );
};

export default End;
