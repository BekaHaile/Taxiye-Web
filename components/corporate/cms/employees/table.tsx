import React from "react";
import { Table, Space, Button, Tag } from "antd";
import { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { useSelector } from "react-redux";

const Link = styled("a")`
  color: ${theme.colors.primary};
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

const TableView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const loading = useSelector(
    (state) => state["corporate_employees"]["loading"]
  );
  const employees = useSelector(
    (state) => state["corporate_employees"]["employees"]
  );
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
    <Table
      loading={loading}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={employees}
    />
  );
};

export default TableView;
