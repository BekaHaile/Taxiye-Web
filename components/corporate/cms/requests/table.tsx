import React from "react";
import { Table, Space, Button, Tag } from "antd";
import { useState } from "react";
import styled from "styled-components";

const Link = styled("a")``;

const columns = [
  {
    title: "Request Id",
    dataIndex: "id",
    sorter: true,
  },
  {
    title: "Reason",
    dataIndex: "reason",
    sorter: true,
  },
  {
    title: "Debit Limit",
    dataIndex: "debit_limit",
    sorter: true,
  },
  {
    title: "Maximum User Limit",
    dataIndex: "maximum_user_limit",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: true,
    render: (val) => {
      let color = "green";
      if (val === "Cancelled") {
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

    render: () => <Link>Cancel</Link>,
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `Edward King`,
    reason: "El Auto Employees",
    debit_limit: `782.01 Birr`,
    maximum_user_limit: 554 - i,
    status: `Approved`,
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
