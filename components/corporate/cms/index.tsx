import React, { useState } from "react";

import { Layout } from "antd";
import Sider from "./sider";
import HomePage from "./home";
import Employees from "./employees";
import Groups from "./groups";
import Rides from "./rides/list";
import Request from "./requests";
import AccountSetting from "./account-setting";
import { useEffect } from "react";
import store from "../../../redux/store";
import { initiateCityFetch } from "../../../redux/actions/corporate/rides";

const { Content } = Layout;

const Cms = () => {
  const [selected, setSelected] = useState("home-page");
  useEffect(() => {
    if (selected === "on-going" || selected === "completed")
      store.dispatch(initiateCityFetch());
  }, [selected]);

  return (
    <Layout>
      <Sider selected={selected} setSelected={setSelected} />
      <Layout className="site-layout" style={{ marginLeft: 256 }}>
        <Content style={{ padding: selected === "dispatch" ? "0px" : "16px", minHeight:"100vh" }}>
          {(() => {
            if (selected === "home-page")
              return <HomePage setSelected={setSelected} />;
            else if (selected === "employees") return <Employees />;
            else if (selected === "groups") return <Groups />;
            else if (selected === "on-going" || selected === "completed")
              return <Rides type={selected} />;
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
