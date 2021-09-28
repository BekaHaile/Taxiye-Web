import React from "react";
import styled from "styled-components";
import ContactUsForm from "./form";
import Infos from "./info";
import { DefaultSection } from "../../section";

const FormContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  @media (max-width: 768px) {
    flex-wrap:wrap;
    padding: 0px;
    width:100%;
  }
`;

const InfosContainer = styled("div")`
  padding-right: 150px;
  @media (max-width: 768px) {
    padding-right: 0px;
    text-align:center;
    margin-bottom:20px;
    width:100%;
  }
`;

const Form = ({ mainOffice, title, subTitle, socialMedias }) => {
  return (
    <>
      <DefaultSection>
        <FormContainer>
          <InfosContainer>
            <Infos
              socialMedias={socialMedias}
              key={mainOffice.id}
              info={mainOffice}
              title={title}
              subTitle={subTitle}
            />
          </InfosContainer>
          <ContactUsForm />
        </FormContainer>
      </DefaultSection>
    </>
  );
};

export default Form;
