import React from "react";
import MainImage from "./image";
import { ContentWrapper, CustomButton, CenteredForm, FormContainer, Title, SubTitle, InputContainer } from "./elements";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CenteredFormContainer = styled(FormContainer)`
justify-content:center;
text-align:center;

}
`;

const CenteredContentContainer = styled("div")`
justify-content:center;
text-align:center;

padding-bottom:60px;

}
`;
const TextContainer = styled("div")`
width:400px;
}
`;

const GoodToGo = () => {

    return (
        <>
            <ContentWrapper>
                <MainImage />
                <CenteredFormContainer>
                    <CenteredForm>


                        <CenteredContentContainer>
                            <Title>Good To Go</Title>
                            <Image height="100px" width="100px" src={require("../../assets/icons/checked-large.svg")}/>
                            <TextContainer>
                                <SubTitle>Your account was successfully created. Thank you for becoming Taxiye’s family!</SubTitle>
                            </TextContainer>
                        </CenteredContentContainer>
                        <Link href="/">
                        <CustomButton>Continue to Taxiye</CustomButton>
                        </Link>

                    </CenteredForm>
                </CenteredFormContainer>


            </ContentWrapper>
        </>
    );
};

export default GoodToGo;
