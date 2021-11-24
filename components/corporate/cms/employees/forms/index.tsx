import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Space, Card, Button, Tabs } from "antd";
import FirstSide from "./first-side";
import SecondSide from "./second-side";
import theme from "../../../../../theme/main";
import store from "../../../../../redux/store";
import {
  changeRoute,
  appendEmployee,
  initiateEmployeeForm,
  resetRegistration,
  registerEmployee
} from "../../../../../redux/actions/corporate/employees";
import { useSelector } from "react-redux";
import { useState } from "react";

const { TabPane } = Tabs;

const MainCard = styled(Card)`
  height: 100%;
`;

const MainRow = styled("div")`
  margin-bottom: 20px;
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
const CenteredFlexContainer = styled("div")`
  display: flex;
  justify-content: center;
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

const Employees = () => {
  const isFormValid = useSelector(
    (state) => state["corporate_employees"]["isFormValid"]
  );
  const default_data = useSelector(
    (state) => state["corporate_employees"]["default_data"]
  );
  const route = useSelector((state) => state["corporate_employees"]["route"]);
  useEffect(() => {
    store.dispatch(initiateEmployeeForm(default_data));
  }, []);

  const [activeKey, setActiveKey] = useState("1");

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
          <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <TabPane tab="Add Manually" key="1">
              <FirstSide />
            </TabPane>
            <TabPane tab="Upload File" key="2">
              <SecondSide setActiveKey={setActiveKey} />
            </TabPane>
          </Tabs>
        </MainRow>
        {activeKey == "1" ? (
          <FlexContainer>
            <Space size={16}>
              <Button
                disabled={!isFormValid}
                onClick={() => {
                  store.dispatch(registerEmployee());
                }}
                type="primary"
              >
                Send Invites
              </Button>
              <Button
                onClick={() => {
                  store.dispatch(resetRegistration());
                }}
              >
                Clear
              </Button>
            </Space>
            <Button
              type="link"
              onClick={() => {
                store.dispatch(appendEmployee(default_data));
              }}
            >
              Add More Employees
            </Button>
          </FlexContainer>
        ) : null}
        {activeKey == "1" ? (
          <div>
            <CenteredFlexContainer>
              <Title>Or</Title>
              <Button onClick={() => setActiveKey("2")} type="link">
                Upload File
              </Button>
            </CenteredFlexContainer>
            <CenteredFlexContainer>
              <Title>(supported file formats: csv, xls, xlsx)</Title>
            </CenteredFlexContainer>
          </div>
        ) : (
          <div>
            <CenteredFlexContainer>
              <Title>Or</Title>
              <Button onClick={() => setActiveKey("1")} type="link">
                Add Employees Manually
              </Button>
            </CenteredFlexContainer>
          </div>
        )}
      </MainCard>
    </>
  );
};

export default Employees;
