import React from "react";
import { Table, Space, Button } from "antd";
import { useState } from "react";
import styled from "styled-components";

const Link = styled("a")`
  color: #a02167;
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
    ],
  },
  {
    title: "Group",
    dataIndex: "group",
    sorter: true,
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
    ],
  },
  {
    title: "Request Time",
    dataIndex: "request_time",
    sorter: true,
  },
  {
    title: "Pick up Location",
    dataIndex: "pick_up_location",
    sorter: true,
  },
  {
    title: "Drop off Location",
    dataIndex: "drop_off_location",
    sorter: true,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: true,
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    group: "El Auto Employees",
    request_time: `2020-02-06 12:10 AM`,
    pick_up_location: "Sarbet, Addis Ababa",
    drop_off_location: `Alemayehu Building`,
    amount: 554 - i,
  });
}
const TableView = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TableView;
