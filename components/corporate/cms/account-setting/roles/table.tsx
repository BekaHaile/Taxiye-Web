import React from "react";
import { Table, Space, Button, Select, Avatar } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  UserOutlined,
} from "@ant-design/icons";
const { Option } = Select;


const Icon = styled("img")``;

const columns = [
  {
    title: "Team member",
    dataIndex: "profile",
    render: (val) => {
      return (
        <Space>
          <Avatar src={val.image} icon={<UserOutlined />} />
          {val.name}
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


const TableView = () => {

  const users = useSelector(
    (state) => state["corporate_account"]["roles"]["users"]
  );
  const loading = useSelector(
    (state) => state["corporate_account"]["roles"]["loading"]
  );

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
    <Table loading={loading} rowSelection={rowSelection} columns={columns} dataSource={users} />
  );
};

export default TableView;
