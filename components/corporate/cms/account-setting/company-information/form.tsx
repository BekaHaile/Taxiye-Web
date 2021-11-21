import React from "react";
import styled from "styled-components";
import { Input, Button, Space, Form } from "antd";
import PhoneInput from "../../form/phone-input";
import store from "../../../../../redux/store";
import * as validationUtils from "../../../../../utils/validation";
import {
  changeAddress,
  changeCompanyName,
  changeCompanyPhone,
  changeDebitLimit,
  changeInvoiceEmail,
  changeOfficialEmail,
  changeUserLimit,
  changeVatNumber,
} from "../../../../../redux/actions/corporate/account";
import { useSelector } from "react-redux";

const Container = styled("div")`
  display: flex;
  gap: 24px;
`;

const FormView = () => {
  const [form] = Form.useForm();
  const name = useSelector(
    (state) => state["corporate_account"]["company"]["name"]
  );
  const debit_limit = useSelector(
    (state) => state["corporate_account"]["company"]["debit_limit"]
  );
  const address = useSelector(
    (state) => state["corporate_account"]["company"]["address"]
  );
  const max_user_limit = useSelector(
    (state) => state["corporate_account"]["company"]["max_user_limit"]
  );
  const official_email = useSelector(
    (state) => state["corporate_account"]["company"]["official_email"]
  );
  const vat_number = useSelector(
    (state) => state["corporate_account"]["company"]["vat_number"]
  );
  const invoice_email = useSelector(
    (state) => state["corporate_account"]["company"]["invoice_email"]
  );
  const phone_no = useSelector(
    (state) => state["corporate_account"]["company"]["phone_no"]
  );
  const country_code = useSelector(
    (state) => state["corporate_account"]["company"]["country_code"]
  );
  const isValid = useSelector(
    (state) => state["corporate_account"]["company"]["isValid"]
  );

  return (
    <>
      <Form
        style={{ width: "800px" }}
        layout="vertical"
        form={form}
        initialValues={{ remember: true }}
      >
        <Container>
          <Form.Item label="Company Legal Name" style={{ width: "100%" }}>
            <Input
              value={name}
              onChange={(e) => {
                store.dispatch(changeCompanyName(e.target.value));
              }}
              placeholder="your company legal name"
            />
          </Form.Item>
          <Form.Item label="Debit Limit" style={{ width: "100%" }}>
            <Input
              value={debit_limit}
              onChange={(e) => {
                store.dispatch(changeDebitLimit(e.target.value));
              }}
              placeholder="50,000.00 Birr"
            />
          </Form.Item>
        </Container>
        <Container>
          <Form.Item label="Address" style={{ width: "100%" }}>
            <Input
              value={address}
              onChange={(e) => {
                store.dispatch(changeAddress(e.target.value));
              }}
              placeholder="Sarbet, Addis Ababa"
            />
          </Form.Item>
          <Form.Item label="Max User Limit" style={{ width: "100%" }}>
            <Input
              value={max_user_limit}
              onChange={(e) => {
                store.dispatch(changeUserLimit(e.target.value));
              }}
              placeholder="555"
            />
          </Form.Item>
        </Container>
        <Container>
          <Form.Item label="Official Email Address" style={{ width: "100%" }}>
            <Input
              value={official_email}
              onChange={(e) => {
                store.dispatch(changeOfficialEmail(e.target.value));
              }}
              type="email"
              placeholder="youremail@company.com"
            />
          </Form.Item>
          <Form.Item label="VAT Number" style={{ width: "100%" }}>
            <Input
              value={vat_number}
              onChange={(e) => {
                store.dispatch(changeVatNumber(e.target.value));
              }}
              placeholder="your vat number"
            />
          </Form.Item>
        </Container>
        <Container>
          <Form.Item label="Company Phone Number" style={{ width: "100%" }}>
            <PhoneInput
              placeholder="enter phone number"
              id="phone_no"
              code={country_code}
              phone_no={phone_no}
              action={(data, a) => {
                store.dispatch(
                  changeCompanyPhone({
                    country: `${data["short"]}`,
                    phone_no: data["phone"],
                    country_code: `+${data["code"]}`,
                    isValid: validationUtils.validatePhone(data["phone"], `+${data["code"]}`),
                  })
                );
              }}
            />
          </Form.Item>
          <Form.Item label="Invoice Email" style={{ width: "100%" }}>
            <Input
              value={invoice_email}
              onChange={(e) => {
                store.dispatch(changeInvoiceEmail(e.target.value));
              }}
              type="email"
              placeholder="yourinvoiceemail@company.com"
            />
          </Form.Item>
        </Container>
        <Form.Item>
          <Space size={16}>
            <Button disabled={!isValid} type="primary">
              Save Changes
            </Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormView;
