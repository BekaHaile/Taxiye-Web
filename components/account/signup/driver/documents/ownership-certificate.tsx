import React, { useState } from "react";
import FileSelector from "./file-selector";
import styled from "styled-components";
import { Progress } from "antd";
import Modal from "../../../../modal/secondary";
import store from "../../../../../redux/store";
import {
  addOwnershipCertificatePicture,
  deleteOwnershipCertificatePicture,
} from "../../../../../redux/actions/driver";
import Preview from "./preview";
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

const MainContainer = styled("div")`
  margin-top: 20px;
  margin-bottom: 60px;
`;

const Document = () => {
  const progress = useSelector((state) => state["driver"]["progress"]);
  const uploading = useSelector((state) => state["driver"]["uploading"]);
  const ownershipCertificatePicture = useSelector(
    (state) => state["driver"]["ownershipCertificatePicture"]
  );

  return (
    <>
      <MainContainer>
        {ownershipCertificatePicture != null ? (
          <Preview
            image={ownershipCertificatePicture}
            deleteAction={() => store.dispatch(deleteOwnershipCertificatePicture())}
          />
        ) : (
          <FileSelector
            action={(image) => {
              store.dispatch(addOwnershipCertificatePicture(image));
            }}
          />
        )}
      </MainContainer>
      <Modal onClose={() => console.log("cancel")} show={uploading}>
        <Progress type="circle" percent={progress} />
      </Modal>
    </>
  );
};

export default Document;
