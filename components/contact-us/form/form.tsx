import React from 'react';
import styled from "styled-components";

import { DefaultTextArea } from "../../form/input-fields/primary-textarea";
import { DefaultInput, Input } from "../../form/input-fields/primary-input";
import { Button } from "../../form/buttons/primary-button";
import { InlineForm } from "../../form/inline-form";


const CustomDefaultTextArea = styled(DefaultTextArea)`

height:200px;
`;
const Container = styled("div")`
width: min-content;
`;
const ButtonContainer = styled("div")`
margin-top: 20px;
`;
const CustomDefaultInput = styled(Input)`
margin-bottom: 20px;
width:700px;
`;



const InlineDefaultInput = styled(Input)`
margin-right:40px !important;
margin-bottom:20px;
`;

const ContactUsForm = () => {
    return (
        <>
            <Container>
                <InlineForm>
                    <InlineDefaultInput
                        placeholder="Subject"
                        id="subject"
                    />
                    <CustomDefaultInput
                        placeholder="Subject"
                        id="subject"
                    />

                </InlineForm>
                <CustomDefaultInput
                    placeholder="Subject"
                    id="subject"
                />

                <CustomDefaultTextArea
                    placeholder="Message"
                    id="message"
                />
                <ButtonContainer>
                    <Button>Send Message</Button>
                </ButtonContainer>
            </Container>
        </>
    );
}

export default ContactUsForm;