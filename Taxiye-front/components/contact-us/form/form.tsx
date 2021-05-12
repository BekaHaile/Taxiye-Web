import React from 'react';
import styled from "styled-components";

import { DefaultTextArea } from "../../form/input-fields/primary-textarea";
import { DefaultInput, Input } from "../../form/input-fields/primary-input";
import { Button } from "../../form/buttons/primary-button";
import { InlineForm } from "../../form/inline-form";


const CustomDefaultTextArea = styled(DefaultTextArea)`
width:700px;
height:200px;
`;
const Container = styled("div")`
width: min-content;
`;

const InlineDefaultInput = styled(Input)`
margin-right:40px !important;
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
                    <DefaultInput
                        placeholder="Subject"
                        id="subject"
                    />

                </InlineForm>
                <DefaultInput
                    placeholder="Subject"
                    id="subject"
                />

                <CustomDefaultTextArea
                    placeholder="Message"
                    id="message"
                />
                <div>
                    <Button>Send Message</Button>
                </div>
            </Container>
        </>
    );
}

export default ContactUsForm;