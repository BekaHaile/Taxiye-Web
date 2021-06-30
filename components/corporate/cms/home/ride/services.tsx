import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import theme from "../../../../../theme/main";

const { Text } = Typography;
const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color:${theme.colors.primaryTextColor};;
`;
const SubTitle = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color:${theme.colors.primaryTextColor};;
`;
const Container = styled("div")`
  height: 420px;
`;
const CustomCard = styled(Card)`
  border-top: none;
  border-left: none;
  border-right: none;
  display: flex;
  cursor:pointer;
  &:after {
    content: url(${require("../../../../../assets/icons/arrow-right.svg")});;
    margin: auto;
    right: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Icon = styled("img")`
  height: 35px;
  width: 35px;
`;
const HomePage = () => {
  return (
    <>
      <Container>
        <CustomCard>
          <Space size={16}>
            <Icon src={require("../../../../../assets/icons/budget-icon.svg")} />
            <Space direction="vertical">
              <Title>Create Group</Title>
              <SubTitle>
                Control the ride policies and travel budgets for your employees
              </SubTitle>
            </Space>
          </Space>
        </CustomCard>
        <CustomCard>
          <Space size={16}>
            <Icon src={require("../../../../../assets/icons/budget-icon.svg")} />
            <Space direction="vertical">
              <Title>Invite Employees</Title>
              <SubTitle>
                Empower your employees to book their own official rides.
              </SubTitle>
            </Space>
          </Space>
        </CustomCard>
        <CustomCard>
          <Space size={16}>
            <Icon src={require("../../../../../assets/icons/budget-icon.svg")} />
            <Space direction="vertical">
              <Title>Request Budget</Title>
              <SubTitle>
                Top up your budget when its low. Control user limit for a
                request and more.
              </SubTitle>
            </Space>
          </Space>
        </CustomCard>
      </Container>
    </>
  );
};

export default HomePage;
