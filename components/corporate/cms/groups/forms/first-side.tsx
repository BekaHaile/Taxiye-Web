import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space, Radio, Form, Input } from "antd";
import theme from "../../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import {
  addGroupName,
  addMonthlyBudget,
  addMonthlyRide,
  changePaymentMode,
} from "../../../../../redux/actions/corporate/group";

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
  width: 200px;
`;

const FormView = () => {
  const [form] = Form.useForm();
  const group_name = useSelector(
    (state) => state["corporate_group"]["group_name"]
  );
  const monthly_budget = useSelector(
    (state) => state["corporate_group"]["monthly_budget"]
  );
  const monthly_ride = useSelector(
    (state) => state["corporate_group"]["monthly_ride"]
  );
  const payment_mode = useSelector(
    (state) => state["corporate_group"]["payment_mode"]
  );
  return (
    <>
      <Form layout="vertical" form={form} initialValues={{ remember: true }}>
        <Form.Item label="Group Name">
          <Input
            placeholder="John Doe"
            value={group_name}
            onChange={(e) => {
              var val = e.target.value;
              store.dispatch(addGroupName(val));
            }}
          />
        </Form.Item>
        <Form.Item label="Monthly budget per user">
          <Input
            placeholder="1,200.00 Birr"
            value={monthly_budget}
            onChange={(e) => {
              var val = e.target.value;
              store.dispatch(addMonthlyBudget(val));
            }}
          />
        </Form.Item>
        <Form.Item label="Monthly ride per user">
          <Input
            type="number"
            placeholder="John Doe"
            value={monthly_ride}
            onChange={(e) => {
              var val = e.target.value;
              store.dispatch(addMonthlyRide(val));
            }}
          />
        </Form.Item>
        <Form.Item label="Payment Mode" className="group_radio">
          <Radio.Group
            value={payment_mode}
            onChange={(e) => {
              var val = e.target.value;
              store.dispatch(changePaymentMode(val));
            }}
          >
            <Radio value="auto-paid">
              <Title>Auto-Paid by company</Title>
              <Detail>
                Ride bills are automatically deducted from your corporate
                account
              </Detail>
            </Radio>
            <Radio value="pre-paid">
              <Title>Pay & Get Reimbursed</Title>
              <Detail>
                Employee pay for their rides and claim reimbursements later
              </Detail>
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormView;
