import React from "react";
import { Table, Space, Button, Tag } from "antd";
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
  },
  {
    title: "Group",
    dataIndex: "group",
    sorter: true,
  },
  {
    title: "Monthly Budger Limit",
    dataIndex: "monthly_budget",
    sorter: true,
  },
  {
    title: "Monthly Ride Limit",
    dataIndex: "monthly_ride_limit",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: true,
    render: (val) => {
      let color = "green";
      if (val === "Inactive") {
        color = "volcano";
      } else if (val === "Pending") {
        color = "geekblue";
      }
      return <Tag color={color}>{val}</Tag>;
    },
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: () => (
      <Space size={16}>
        <Link>Deactivate</Link>
        <Link>Edit</Link>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    group: "El Auto Employees",
    monthly_budget: `782.01 Birr`,
    monthly_ride_limit: 554 - i,
    status: `Active`,
  });
}
const TableView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default TableView;
