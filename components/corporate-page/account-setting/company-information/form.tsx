import React from "react";
import styled from "styled-components";
import { Input, Button, Space, Form } from "antd";

const Container = styled("div")`
  display: flex;
  gap: 24px;
`;

const FormView = () => {
  const [form] = Form.useForm();
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
            <Input placeholder="your company legal name" />
          </Form.Item>
          <Form.Item label="Debit Limit" style={{ width: "100%" }}>
            <Input placeholder="50,000.00 Birr" />
          </Form.Item>
        </Container>
        <Container>
          <Form.Item label="Address" style={{ width: "100%" }}>
            <Input placeholder="Sarbet, Addis Ababa" />
          </Form.Item>
          <Form.Item label="Max User Limit" style={{ width: "100%" }}>
            <Input placeholder="555" />
          </Form.Item>
        </Container>
        <Container>
          <Form.Item label="Official Email Address" style={{ width: "100%" }}>
            <Input placeholder="youremail@company.com" />
          </Form.Item>
          <Form.Item label="VAT Number" style={{ width: "100%" }}>
            <Input placeholder="your vat number" />
          </Form.Item>
        </Container>
        <Container>
          <Form.Item label="Company Phone Number" style={{ width: "100%" }}>
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item label="Invoice Email" style={{ width: "100%" }}>
            <Input placeholder="yourinvoiceemail@company.com" />
          </Form.Item>
        </Container>
        <Form.Item>
          <Space size={16}>
            <Button type="primary">Save Changes</Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormView;
