import React from "react";
import styled from "styled-components";
import { Input, Button, Space, Form, Avatar } from "antd";
import { UserOutlined, PlusCircleFilled } from "@ant-design/icons";
import PhoneInput from "../../form/phone-input";
import store from "../../../../../redux/store";
import * as validationUtils from "../../../../../utils/validation";
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
    (state) => state["corporate_account"]["user"]["full_name"]
  );
  const profile = useSelector(
    (state) => state["corporate_account"]["user"]["profile"]
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
            <Avatar src={profile} size={70} icon={<UserOutlined />}></Avatar>
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
            placeholder="enter phone number"
            id="phone_no"
            code={parseInt(country_code)}
            phone_no={phone_no}
            action={(data, a) => {
              store.dispatch(
                changePhone({
                  country: `${data["short"]}`,
                  phone_no: data["phone"],
                  country_code: `+${data["code"]}`,
                  isValid: validationUtils.validatePhone(data["phone"], `+${data["code"]}`),
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
