import React from "react";
import { Space } from "antd";
import styled from "styled-components";
import ToolBar from "./toolbar";
import Highlights from "./highlights";
import Rides from "./ride";

const HomePage = () => {
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
