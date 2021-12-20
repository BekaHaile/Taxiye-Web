import React, { useState } from "react";
import FileSelector from "./file-selector";
import styled from "styled-components";
import { Progress } from "antd";
import Modal from "../../../../modal/secondary";
import store from "../../../../../redux/store";
import {
  addImageFile,
  deleteImageFile,
} from "../../../../../redux/actions/driver";
import Preview from "./preview";

import { useSelector } from "react-redux";

const MainContainer = styled("div")`
  margin-top: 20px;
  margin-bottom: 60px;
`;

const FlexContainer = styled("div")`
  display: flex;
  gap: 40px;
`;

const Document = ({ requiredDocument }) => {
  const progress = useSelector((state) => state["driver"]["progress"]);
  const uploading = useSelector((state) => state["driver"]["uploading"]);

  const files = useSelector(
    (state) => state["driver"]["files"]
  );

  return (
    <>
      <FlexContainer>
        {[...Array(requiredDocument?.doc_count)].map((x, i) => (
          <MainContainer key={i}>
            {files[i] != null ? (
              <Preview
                image={files[i]}
                deleteAction={() => store.dispatch(deleteImageFile(i))}
              />
            ) : (
              <FileSelector
                action={(image) => {
                  store.dispatch(addImageFile(image, requiredDocument?.doc_type_num));
                }}
              />
            )}
          </MainContainer>
        ))}

      </FlexContainer>
      <Modal onClose={() => console.log("cancel")} show={uploading}>
        <Progress type="circle" percent={progress} />
      </Modal>
    </>
  );
};

export default Document;
