import React from "react";
import styled from "styled-components";
import { Row, Space, Card, Button, Tabs } from "antd";
import FirstSide from "./first-side";
import SecondSide from "./second-side";
import theme from "../../../../../theme/main";
import store from "../../../../../redux/store";
import { changeRoute } from "../../../../../redux/actions/corporate/employees";
import { useSelector } from "react-redux";
const { TabPane } = Tabs;

const MainCard = styled(Card)`
  height: 100%;
`;

const MainRow = styled("div")`
  
`;
const BackButton = styled("img")`
  height: 30px;
`;
const Container = styled("div")`
  display: flex;
  gap: 20px;
  padding-bottom: 40px;
  text-align: center;
`;
const FlexContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const Title = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.primaryTextColor};
  margin: auto 0;
`;

const Groups = () => {
  const isValid = useSelector((state) => state["corporate_group"]["isValid"]);
  return (
    <>
      <MainCard>
        <Container>
          <BackButton
            onClick={() => {
              store.dispatch(changeRoute(""));
            }}
            src={require("../../../../../assets/icons/back-arrow.svg")}
          />
          <Title>Add Employees</Title>
        </Container>
        <MainRow>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Add Manually" key="1">
              <FirstSide />
            </TabPane>
            <TabPane tab="Upload File" key="2">
              <SecondSide />
            </TabPane>
          </Tabs>
        </MainRow>
        <FlexContainer>
          <Space size={16}>
            <Button disabled={!isValid} type="primary">
              Send Invites
            </Button>
            <Button onClick={() => {}}>Clear</Button>
          </Space>
          <Button type="link">
            Add More Employees
          </Button>
        </FlexContainer>
      </MainCard>
    </>
  );
};

export default Groups;
