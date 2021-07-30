import React, { useState } from "react";

import { Layout } from "antd";
import Sider from "./sider";
import HomePage from "./home";
import Employees from "./employees";
import Groups from "./groups";
import Rides from "./rides/list";
import Request from "./requests";
import Dispatch from "./dispatch";
import AccountSetting from "./account-setting";
import { useEffect } from "react";
import store from "../../../redux/store";
import {initiateCityFetch} from "../../../redux/actions/corporate/rides";


const { Content } = Layout;

const Cms = () => {
  const [selected, setSelected] = useState("home-page");
  useEffect(()=>{
    if(selected === "on-going" || selected === "completed")
    store.dispatch(initiateCityFetch());

  }, [selected]);
 
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider selected={selected} setSelected={setSelected} />
      <Layout className="site-layout">
        <Content style={{ margin: selected === "dispatch" ? "0px" : "16px" }}>
          {(() => {
            if (selected === "home-page")
              return <HomePage setSelected={setSelected} />;
            else if (selected === "employees") return <Employees />;
            else if (selected === "groups") return <Groups />;
            else if (selected === "dispatch") return <Dispatch />;
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
