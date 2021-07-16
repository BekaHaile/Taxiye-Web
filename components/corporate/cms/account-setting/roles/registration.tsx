import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Select } from "antd";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import {
  setNewFullName,
  setNewEmail,
  setNewRole,
} from "../../../../../redux/actions/corporate/account";

const { Option } = Select;

const Register = () => {
  const role = useSelector(
    (state) => state["corporate_account"]["roles"]["user"]["role"]
  );
  const full_name = useSelector(
    (state) => state["corporate_account"]["roles"]["user"]["full_name"]
  );
  const email = useSelector(
    (state) => state["corporate_account"]["roles"]["user"]["email"]
  );
  return (
    <>
      <Form>
        <Form.Item
          style={{ display: "block", marginBottom: "12px" }}
          label="Full Name"
        >
          <Input
            value={full_name}
            onChange={(e) => {
              store.dispatch(setNewFullName(e.target.value));
            }}
            placeholder=""
          />
        </Form.Item>
        <Form.Item
          style={{ display: "block", marginBottom: "12px" }}
          label="Email Address"
        >
          <Input
            value={email}
            onChange={(e) => {
              store.dispatch(setNewEmail(e.target.value));
            }}
            placeholder=""
          />
        </Form.Item>
        <Form.Item
          style={{ display: "block", marginBottom: "12px" }}
          label="User Role"
        >
          <Select
            onChange={(val) => {
              store.dispatch(setNewRole(val));
            }}
            defaultValue={role}
          >
            <Option value="Adminstrator">Adminstrator</Option>
            <Option value="Moderator">Moderator</Option>

            <Option value="Dispatcher">Dispatcher</Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
