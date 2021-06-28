import React from "react";
import styled from "styled-components";
import { Tabs, Card } from "antd";
import AccountInformation from "./account-information";
import CompanyInformation from "./company-information";
import RolesTab from "./roles";

const MainCard = styled(Card)`
  width: 100%;
  height: 100%;
`;

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const AccountSetting = () => {
  return (
    <>
      <MainCard>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Account Information" key="1">
            <AccountInformation/>
          </TabPane>
          <TabPane tab="Company Information" key="2">
            <CompanyInformation/>
          </TabPane>
          <TabPane tab="Roles" key="3">
            <RolesTab />
          </TabPane>
        </Tabs>
      </MainCard>
    </>
  );
};

export default AccountSetting;
