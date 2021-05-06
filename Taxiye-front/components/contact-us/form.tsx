import React from 'react';
import { Inputs, Form, InlineForm, InputSeparator, Button, DefaultInput, DefaultTextArea } from "../form/inputs";


const ContactUsForm = () => {
    return (
        <>
            <Form>
                <InlineForm>
                    <DefaultInput
                        placeholder="Full name..."
                        id="fullname"
                    />

                    <DefaultInput placeholder="Email address..." id="emailaddress" />

                </InlineForm>
                <DefaultInput
                    placeholder="Subject"
                    id="subject"
                />

                <DefaultTextArea
                    placeholder="Message"
                    id="message"
                />



                <Button>Send Message</Button>
            </Form>
        </>
    );
}

export default ContactUsForm;