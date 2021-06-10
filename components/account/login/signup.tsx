import React from "react";
import Image from "../image";
import { ContentWrapper, CenteredForm, FormContainer } from "../elements";
import SignupForm from "./forms/sign-up";
const Signup = ({ hero, action }:any) => {

    return (
        <>
            <ContentWrapper>
                {
                    hero &&
                    <Image hero={hero} />
                }
                <FormContainer>
                    <CenteredForm>
                        <SignupForm action={() => action()} />
                    </CenteredForm>
                </FormContainer>


            </ContentWrapper>
        </>
    );
};

export default Signup;
