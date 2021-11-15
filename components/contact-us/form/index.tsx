import React from "react";
import styled from "styled-components";
import ContactUsForm from "./form";
import Infos from "./info";
import { DefaultSection } from "../../section";
import { useSelector } from "react-redux";
import { Loading } from "../../loading/loading";

const FormContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  max-width: 1250px;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0px;
    width: 100%;
  }
`;

const InfosContainer = styled("div")`
  width: 60%;
  @media (max-width: 768px) {
    padding-right: 0px;
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const Form = ({ mainOffice, title, subTitle, socialMedias, contactUsContent }) => {
  const loading = useSelector((state) => state["contact_us"]["loading"]);
  return (
    <>
      {loading ? <Loading /> : null}
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
          <ContactUsForm contactUsContent={contactUsContent} />
        </FormContainer>
      </DefaultSection>
    </>
  );
};

export default Form;
