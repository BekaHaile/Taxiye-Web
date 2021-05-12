import React from 'react';
import styled from "styled-components";
import ContactUsForm from "./form";
import Infos from "./info";
import { DefaultSection  } from "../../section";


const FormContainer = styled("div")`
    display: flex;
    justify-content:space-between;
    padding: 0px 60px;
`;


const info = {
    id: "1",
    header: "Let's talk...",
    headersubTitle: "Ask us anything or just say hi...",
    content: [{
        title: "Open Hours",
        details: [
            "Monday - Friday",
            "8 am - 5 pm",
            "Saturday",
            "8 am - 12 pm"
        ],
    },
    {
        title: "Contact Support",
        details: [
            "info@elnetech.com",
            "6055 - Free call 24/7"
        ],
    }
    ]

};



const InfosContainer = styled("div")`
padding-right:150px;
    
`;

const Form = () => {
    return (
        <>
            <DefaultSection>
                <FormContainer>
                        <InfosContainer>
                        <Infos key={info.id} info={info} />
                        </InfosContainer>
                       
                    
                    <ContactUsForm/>
                </FormContainer>
            </DefaultSection>


            
        </>
    );
}

export default Form;