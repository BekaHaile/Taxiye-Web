import React,  { useState, useEffect } from "react";
import styled from "styled-components";
import { Tabs, Card } from "antd";
import AccountInformation from "./account-information";
import CompanyInformation from "./company-information";
import RolesTab from "./roles";
import store from "../../../../redux/store";
import {
  initiateRolesApiCall,
} from "../../../../redux/actions/corporate/account";


const MainCard = styled(Card)`
  width: 100%;
  height: 100%;

`;

const { TabPane } = Tabs;

const AccountSetting = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  useEffect(() => {
    if(selectedTab=="3")
    store.dispatch(initiateRolesApiCall());
  }, [selectedTab]);
  function tabChanged(key) {
    setSelectedTab(key);
  }
  return (
    <>
      <MainCard  bodyStyle={{height:"100%"}}>
        <Tabs style={{height:"100%"}} defaultActiveKey="1" onChange={tabChanged}>
          <TabPane  tab="Account Information" key="1">
            <AccountInformation />
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
