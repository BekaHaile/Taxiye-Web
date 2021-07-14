import React from "react";
import { Table, Space, Button, Tag } from "antd";
import { useState } from "react";
import styled from "styled-components";
import theme from "../../../../../theme/main";
import { useSelector } from "react-redux";

const Link = styled("a")`
  color: ${theme.colors.primary};
`;



const TableView = ({columns}) => {
  const rides = useSelector((state) => state["corporate_rides"]["rides"]);
  const loading = useSelector((state) => state["corporate_rides"]["loading"]);
  return <Table columns={columns} dataSource={rides} loading={loading} />;
};

export default TableView;
