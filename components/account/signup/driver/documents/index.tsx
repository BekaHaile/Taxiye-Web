import React from "react";
import { Button } from "../../../../form/buttons/primary-button";
import { Title, SubTitle } from "../../../elements";
import Modal from "../../../../modal/secondary";
import { useState } from "react";
import store from "../../../../../redux/store";
import {
  submitDriverForm,
  uploadImageFile,
} from "../../../../../redux/actions/driver";
import {
  BackButton,
  Container,
  CustomHeaderContainer,
  FixedCustomButton,
  FixedCustomButtonWithSpace,
  InfoText,
  ModalContentContainer,
  ModalTitle,
} from "./modal-content";
import { useSelector } from "react-redux";
import Uploader from "./uploader";

const Documents = ({ handleNext, activeSubStep }) => {
  const [showConsent, setshowConsent] = useState(false);

  const files = useSelector((state) => state["driver"]["files"]);

  const requiredDocuments = useSelector(
    (state) => state["driver"]["required_documents"]
  );

  return (
    <>
      <CustomHeaderContainer>
        <SubTitle>
          {activeSubStep + 1} / {requiredDocuments?.length}
        </SubTitle>
        <Title>{requiredDocuments[activeSubStep]?.doc_type_text ?? ""}</Title>
        <SubTitle>
          {requiredDocuments[activeSubStep]?.instructions ?? ""}
        </SubTitle>
      </CustomHeaderContainer>
      <Uploader requiredDocument={requiredDocuments[activeSubStep]} />

      {activeSubStep + 1 == requiredDocuments?.length ? (
        <Button
          disabled={
            !(files?.length == requiredDocuments[activeSubStep]?.doc_count)
          }
          onClick={() =>
            setshowConsent(true)
          }
        >
          Finish
        </Button>
      ) : (
        <Button
          disabled={
            !(files?.length == requiredDocuments[activeSubStep]?.doc_count)
          }
          onClick={() =>
            store.dispatch(
              uploadImageFile(activeSubStep + 1 == requiredDocuments?.length)
            )
          }
        >
          Continue
        </Button>
      )}

      <Modal
        showCloseIcon={true}
        onClose={() => setshowConsent(false)}
        show={showConsent}
      >
        <Container>
          <ModalTitle>
            I accept that documents uploaded by me are true and correct. I
            understand that any attempt of providing incorrect, misleading
            information or fake documents will lead to my immediate black
            listing from the Taxiye platform. Taxiye platform reserves the right
            to take the matter to the law enforcement authorities in case of
            forged documents.
          </ModalTitle>
        </Container>
        <ModalContentContainer>
          <FixedCustomButtonWithSpace onClick={() => setshowConsent(false)}>
            Cancel
          </FixedCustomButtonWithSpace>
          <FixedCustomButton
            onClick={() => {
              setshowConsent(false);
              store.dispatch(
                uploadImageFile(activeSubStep + 1 == requiredDocuments?.length)
              )
            }}
          >
            I agree
          </FixedCustomButton>
        </ModalContentContainer>
      </Modal>
    </>
  );
};

export default Documents;
