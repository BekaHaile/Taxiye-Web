import React from "react";
import { Space } from "antd";
import styled from "styled-components";
import ToolBar from "./toolbar";
import Highlights from "./highlights";
import Rides from "./ride";
import { useEffect } from "react";
import store from "../../../../redux/store";
import {
  getOverviewData,
  getRecentRidesData,
} from "../../../../redux/actions/corporate/home";

const HomePage = () => {
  useEffect(() => {
    store.dispatch(getOverviewData());
    store.dispatch(getRecentRidesData());
  }, []);
  return (
    <>
      <Space style={{ width: "100%" }} direction="vertical" size={24}>
        <ToolBar />
        <Highlights />
        <Rides />
      </Space>
    </>
  );
};

export default HomePage;
