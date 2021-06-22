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




const InfosContainer = styled("div")`
padding-right:150px;
    
`;

const Form = ({mainOffice, title, subTitle, socialMedias}) => {
    return (
        <>
            <DefaultSection>
                <FormContainer>
                        <InfosContainer>
                        <Infos socialMedias={socialMedias} key={mainOffice.id} info={mainOffice} title={title} subTitle={subTitle} />
                        </InfosContainer>
                    <ContactUsForm/>
                </FormContainer>
            </DefaultSection>


            
        </>
    );
}

export default Form;