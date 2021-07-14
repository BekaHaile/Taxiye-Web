import React from "react";
import styled from "styled-components";
import { Input, Button, Space, Form, Avatar } from "antd";
import { UserOutlined, PlusCircleFilled } from "@ant-design/icons";
import { PhoneInput } from "../../../../form/input-fields/phone-input";
import store from "../../../../../redux/store";
import {
  changeEmail,
  changeFullName,
  changeImage,
  changePhone,
} from "../../../../../redux/actions/corporate/account";
import { useSelector } from "react-redux";

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
  background-color: red;
  border-radius: 50%;
`;

const FormView = () => {
  const [form] = Form.useForm();
  const full_name = useSelector(
    (state) => state["corporate_account"]["user"]["first_name"]
  );
  const email = useSelector(
    (state) => state["corporate_account"]["user"]["email"]
  );
  const phone_no = useSelector(
    (state) => state["corporate_account"]["user"]["phone_no"]
  );
  const country_code = useSelector(
    (state) => state["corporate_account"]["user"]["country_code"]
  );
  const isValid = useSelector(
    (state) => state["corporate_account"]["user"]["isValid"]
  );

  return (
    <>
      <Form
        style={{ width: "400px", height: "100%" }}
        layout="vertical"
        form={form}
        initialValues={{ remember: true }}
      >
        <Form.Item>
          <AvatarContainer>
            <Avatar src="" size={70} icon={<UserOutlined />}></Avatar>
            <Icon
              src={require("../../../../../assets/icons/add-icon.svg")}
            ></Icon>
          </AvatarContainer>
        </Form.Item>
        <Form.Item label="Full Name">
          <Input
            placeholder="John Doe"
            value={full_name}
            onChange={(e) => {
              store.dispatch(changeFullName(e.target.value));
            }}
          />
        </Form.Item>
        <Form.Item label="Email Address">
          <Input
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => {
              store.dispatch(changeEmail(e.target.value));
            }}
          />
        </Form.Item>
        <Form.Item label="Phone Number">
          <PhoneInput
            id="phone"
            phone_no={phone_no}
            country_code={country_code}
            placeholder="your phone number"
            action={(isValid, data, phone_no) => {
              store.dispatch(
                changePhone({
                  country: `${data.name}`,
                  phone_no: phone_no,
                  country_code: `+${data.dialCode}`,
                  isValid: isValid,
                })
              );
            }}
          />
        </Form.Item>
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
