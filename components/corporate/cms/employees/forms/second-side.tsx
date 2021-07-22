import React from "react";
import styled from "styled-components";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import readXlsxFile from "read-excel-file";

const { Dragger } = Upload;
import VehicleList from "./vehicle-list";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import { appendEmployee } from "../../../../../redux/actions/corporate/employees";

const max = 1440;

const Container = styled("div")`
  padding: 20px 0px;
`;
const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const Title = styled("p")``;
const Help = styled("p")``;

const FormView = ({ setActiveKey }) => {
  const groups = useSelector((state) => state["corporate_employees"]["groups"]);

  return (
    <>
      <InfoContainer>
        <Title>Import list of employees</Title>
        <Help>How to create and upload file</Help>
      </InfoContainer>
      <Container>
        <Dragger
          accept=".csv,.xls,.xlsx"
          maxCount={1}
          multiple={false}
          beforeUpload={(file) => {
            
            const schema = {
              "Code": {
                prop: "code",
                type: Number,
              },
              "Phone Number": {
                prop: "phone_no",
                type: String,
              },
              "First Name": {
                prop: "first_name",
                type: String,
              },
              "Last Name": {
                prop: "last_name",
                type: String,
              },
              Email: {
                prop: "email",
                type: String,
              },
              Group: {
                prop: "group",
                type: String,
              },
            };
            readXlsxFile(file, { schema }).then((data) => {
              store.dispatch(appendEmployee(data.rows));
              console.log(data.rows);
              setActiveKey("1");
            });
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            (supported file formats: csv, xls, xlsx)
          </p>
        </Dragger>
      </Container>
    </>
  );
};

export default FormView;
