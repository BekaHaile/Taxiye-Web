import React, { useState } from "react";
import { Layout } from "antd";
import Sider from "./sider";
import HomePage from "./home";
import Employees from "./employees";
import Groups from "./groups";
import OnGoingRides from "./rides/on-going";
import CompeletedRides from "./rides/completed";
import Request from "./requests";
import Dispatch from "./dispatch";
import AccountSetting from "./account-setting";
const { Content } = Layout;

const Cms = () => {
  const [selected, setSelected] = useState("home-page");
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider setSelected={setSelected} />
      <Layout className="site-layout">
        <Content style={{ margin: selected === "dispatch" ? "0px" : "16px" }}>
          {(() => {
            if (selected === "home-page") return <HomePage />;
            else if (selected === "employees") return <Employees />;
            else if (selected === "groups") return <Groups />;
            else if (selected === "dispatch") return <Dispatch />;
            else if (selected === "on-going") return <OnGoingRides />;
            else if (selected === "completed") return <CompeletedRides />;
            else if (selected === "requests") return <Request />;
            else if (selected == "account-setting") return <AccountSetting />;
            else return null;
          })()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Cms;
