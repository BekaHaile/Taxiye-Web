import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Select } from "antd";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  setDebitLimit,
  setMaximumUser,
  setAReason,
} from "../../../../redux/actions/corporate/requests";

const { TextArea } = Input;
const { Option } = Select;

const Register = () => {
  const debit_limit = useSelector(
    (state) => state["corporate_requests"]["debit_limit"]
  );
  const max_user_limit = useSelector(
    (state) => state["corporate_requests"]["max_user_limit"]
  );
  const reason = useSelector((state) => state["corporate_requests"]["reason"]);
  return (
    <>
      <Form>
        <Form.Item
          style={{ display: "block", marginBottom: "12px" }}
          label="Debit Limit"
        >
          <Input
            value={debit_limit}
            onChange={(e) => {
              store.dispatch(setDebitLimit(e.target.value));
            }}
            placeholder=""
          />
        </Form.Item>
        <Form.Item
          style={{ display: "block", marginBottom: "12px" }}
          label="Maximum User Limit"
        >
          <Input
            type="number"
            value={max_user_limit}
            onChange={(e) => {
              store.dispatch(setMaximumUser(e.target.value));
            }}
            placeholder=""
          />
        </Form.Item>
        <Form.Item
          style={{ display: "block", marginBottom: "12px" }}
          label="Reason"
        >
          <TextArea
            value={reason}
            onChange={(e) => {
              store.dispatch(setAReason(e.target.value));
            }}
            placeholder=""
            autoSize={{ minRows: 4, maxRows: 10 }}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
