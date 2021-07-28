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
    dataIndex: "user_name",
    sorter: true,
  },
  {
    title: "Group",
    dataIndex: "user_name",
    sorter: true,
  },
  {
    title: "Monthly Budger Limit",
    dataIndex: "monthly_transaction_limit",
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
      let color = "geekblue";
      let status = "Pending";
      if (val == 2) {
        color = "volcano";
        status = "Inactive";
      } else if (val == 1) {
        color = "green";
        status = "Active";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Actions",
    dataIndex: "status",
    render: (status) => (
      <Space size={16}>
        {status == 1 ? (
          <Link>Deactivate</Link>
        ) : status == 2 ? (
          <Link>Activate</Link>
        ) : null}
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
