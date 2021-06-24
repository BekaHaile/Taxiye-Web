import React, { useState } from "react";
import { Layout } from "antd";
import Sider from "./sider";
import HomePage from "./home";
import Employees from "./employees";
import Groups from "./groups";
import OnGoingRides from "./rides/on-going";
import CompeletedRides from "./rides/completed";
import Request from "./requests";

const { Content } = Layout;

const Cms = () => {
  const [selected, setSelected] = useState("home-page");
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider setSelected={setSelected} />
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          {(() => {
            if (selected === "home-page") return <HomePage />;
            else if (selected === "employees") return <Employees />;
            else if (selected === "groups") return <Groups />;
            else if (selected === "on-going") return <OnGoingRides />;
            else if (selected === "completed") return <CompeletedRides />;
            else if (selected === "requests") return <Request />;
            else return null;
          })()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Cms;
