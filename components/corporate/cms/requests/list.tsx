import React, { useEffect } from "react";
import { Table, Space, Button, Tag } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  fetchRequests,
  initiateCancelRequest,
} from "../../../../redux/actions/corporate/requests";

const columns = [
  {
    title: "Request Id",
    dataIndex: "request_id",
    sorter: true,
  },
  {
    title: "Reason",
    dataIndex: "reason",
    sorter: true,
  },
  {
    title: "Debit Limit",
    dataIndex: "debt_limit",
    sorter: true,
  },
  {
    title: "Maximum User Limit",
    dataIndex: "max_user_limit",
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
        color = "green";
        status = "Approved";
      } else if (val == 3) {
        color = "volcano";
        status = "Rejected";
      } else if (val == 4) {
        color = "volcano";
        status = "Cancelled";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Actions",
    dataIndex: "status",

    render: (val, data) => {
      if (val == 4) {
        return <Button type="link">Delete</Button>;
      } else if (val == 1) {
        return (
          <Button
            onClick={() => {
              store.dispatch(initiateCancelRequest(data["request_id"]));
            }}
            type="link"
          >
            Cancel
          </Button>
        );
      }
    },
  },
];

const TableView = () => {
  useEffect(() => {
    store.dispatch(fetchRequests());
  }, []);
  const loading = useSelector(
    (state) => state["corporate_requests"]["loading"]
  );
  const requests = useSelector(
    (state) => state["corporate_requests"]["requests"]
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
    <Table
      loading={loading}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={requests}
    />
  );
};

export default TableView;
