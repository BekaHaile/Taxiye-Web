import React from "react";
import styled from "styled-components";
import { Input, Button, Space, Form, Avatar } from "antd";
import { UserOutlined, PlusCircleFilled } from "@ant-design/icons";

const AvatarContainer = styled("div")`
  position: relative;
  width: 70px;
`;
const Icon = styled("img")`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  transform: translate(-50%, 5px);
  background-color:red;
  border-radius:50%;
`;

const FormView = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        style={{ width: "400px" }}
        layout="vertical"
        form={form}
        initialValues={{ remember: true }}
      >
        <Form.Item>
          <AvatarContainer>
            <Avatar src="" size={70} icon={<UserOutlined />}></Avatar>
            <Icon src={require("../../../../../assets/icons/add-icon.svg")}>
              
            </Icon>
          </AvatarContainer>
        </Form.Item>
        <Form.Item label="Full Name">
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item label="Email Address">
          <Input placeholder="johndoe@gmail.com" />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input placeholder="9378468736" />
        </Form.Item>
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
