import React from "react";
import { Table, Space, Button, Select, Avatar } from "antd";
import { useState } from "react";
import styled from "styled-components";
const { Option } = Select;

const Icon = styled("img")``;

const columns = [
  {
    title: "Team member",
    dataIndex: "name",
    render: (val) => {
      return (
        <Space>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          {val}
        </Space>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
  },

  {
    title: "Roles",
    dataIndex: "role",
    render: (val) => {
      return (
        <Select defaultValue={val}>
          <Option value="Adminstrator">Adminstrator</Option>
          <Option value="Moderator">Moderator</Option>

          <Option value="Dispatcher">Dispatcher</Option>
        </Select>
      );
    },
  },

  {
    title: "Actions",
    dataIndex: "actions",

    render: () => (
      <Icon src={require("../../../../../assets/icons/delete.svg")} />
    ),
  },
];

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `Edward King`,
    email: "email@email.com",
    role: i == 0 ? "Adminstrator" : i == 1 ? "Moderator" : "Dispatcher",
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
