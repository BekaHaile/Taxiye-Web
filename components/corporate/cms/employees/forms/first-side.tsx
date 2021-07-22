import React, { useEffect } from "react";
import styled from "styled-components";
import { Table, Form, Space, Input, Select } from "antd";
import theme from "../../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import PhoneInput from "../../form/phone-input";
import * as validationUtils from "../../../../../utils/validation";
import {
  phoneAdded,
  removeEmployee,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeGroup,
} from "../../../../../redux/actions/corporate/employees";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Title = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  color: ${theme.colors.primaryLabelColor};
`;
const Detail = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  color: ${theme.colors.primaryLabelColor};
  width: 222px;
`;


const FormView = () => {
  const default_data = useSelector(
    (state) => state["corporate_employees"]["default_data"]
  );

  const loading = useSelector(
    (state) => state["corporate_employees"]["loading"]
  );
  const groups = useSelector((state) => state["corporate_employees"]["groups"]);
  const new_employees = useSelector(
    (state) => state["corporate_employees"]["new_employees"]
  );

  const columns = [
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
      render: (val, record, index) => {
        return (
          <Form.Item validateStatus={validationUtils.validatePhone(record["phone_no"]) ? "" : "error"}>
            <PhoneInput
              code={record["code"]}
              phone_no={record["phone_no"]}
              action={(data) => {
                store.dispatch(phoneAdded(data["phone"],data["code"],index));
              }}
            />
          </Form.Item>
        );
      },
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      render: (val, record, index) => {
        return (
          <Form.Item validateStatus={validationUtils.validateInput(val) ? "" : "error"}>
            <Input
              value={val}
              onChange={(e) => {
                store.dispatch(changeFirstName(e.target.value, index));
              }}
              placeholder="Enter First Name"
            />
          </Form.Item>
        );
      },
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      render: (val, record, index) => {
        return (
          <Form.Item validateStatus={validationUtils.validateInput(val) ? "" : "error"}>
            <Input
              value={val}
              onChange={(e) => {
                store.dispatch(changeLastName(e.target.value, index));
              }}
              placeholder="Enter Last Name"
            />
          </Form.Item>
        );
      },
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
      render: (val, record, index) => {
        return (
          <Form.Item validateStatus={validationUtils.validateEmail(val) ? "" : "error"}>
            <Input
              value={val}
              onChange={(e) => {
                store.dispatch(changeEmail(e.target.value, index));
              }}
              placeholder="Enter Email Address"
            />
          </Form.Item>
        );
      },
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
      render: (val, record, index) => {
        return (
          <Form.Item validateStatus={validationUtils.validateInput(val) ? "" : "error"}>
            <Select
              onChange={(value) => {
                store.dispatch(changeGroup(value, index));
              }}
              value={val}
            >
              <Option disabled value={null}>
                Select Group
              </Option>
              {groups.map((group, index) => (
                <Option value={group.title}>{group.title}</Option>
              ))}
            </Select>
          </Form.Item>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <Form.Item>
          <DeleteOutlined
            onClick={() => {
              store.dispatch(removeEmployee(index));
            }}
          />
        </Form.Item>
      ),
    },
  ];
  return (
    <>
      <Table
        pagination={false}
        dataSource={new_employees}
        loading={loading}
        columns={columns}
      />
    </>
  );
};

export default FormView;
