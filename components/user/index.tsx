import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import Sider from "./sider";
import Booking from "../booking";
import MyOrders from "./my-orders";
import InviteFriends from "./invite-friends";
import { useSelector } from "react-redux";

const { Content } = Layout;

const Cms = () => {
  const selected = useSelector((state) => state["user_sider"]["menu_item"]);
  useEffect(() => {}, [selected]);

  return (
    <Layout>
      <Sider />
      <Layout
        className="site-layout"
        style={{ marginLeft: selected == "booking" ? 0 : 256 }}
      >
        <Content style={{ margin: selected == "booking"? "0px":"16px" }}>
          {(() => {
            if (selected === "booking") return <Booking />;
            else if (selected === "my-orders") return <MyOrders />;
            else if (selected === "wallet") return <Booking />;
            else if (selected === "payment-method") return <Booking />;
            else if (selected === "promotions") return <Booking />;
            else if (selected === "invite-friends") return <InviteFriends />;
            else if (selected === "support") return <Booking />;
            else if (selected === "account-Setting") return <Booking />;
            else return null;
          })()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Cms;
