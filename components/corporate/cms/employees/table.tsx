import React, { useEffect } from "react";
import { Table, Space, Button, Tag } from "antd";
import { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { toggleEmployeeStatus } from "../../../../redux/actions/corporate/employees";

const CenteredContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TableView = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const loading = useSelector(
    (state) => state["corporate_employees"]["loading"]
  );
  const employees = useSelector(
    (state) => state["corporate_employees"]["employees"]
  )?.reverse();
  const groups = useSelector((state) => state["corporate_group"]["groups"]);
  const q = useSelector((state) => state["corporate_employees"]["q"]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((entry) =>
        entry?.user_name?.toLowerCase()?.includes(q?.toLowerCase())
      )
    );
  }, [q, employees]);

  const getGroupBudgetInfo = (groupId) => {
    if (groupId)
      return groups.find((item) => item.group_id === groupId)
        ?.monthly_budget_limit;
    return "Unknown";
  };
  const getGroupRideInfo = (groupId) => {
    if (groupId)
      return groups.find((item) => item.group_id === groupId)
        ?.monthly_ride_limit;
    return "Unknown";
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "user_name",
      sorter: true,
    },
    {
      title: "Phone Number",
      dataIndex: "phone_no",
      sorter: true,
    },
    {
      title: "Monthly Budget Limit",
      dataIndex: "group_id",
      sorter: true,
      render: (val) => {
        return <>{getGroupBudgetInfo(val)}</>;
      },
    },
    {
      title: "Monthly Ride Limit",
      dataIndex: "group_id",
      sorter: true,
      render: (val) => {
        return <>{getGroupRideInfo(val)}</>;
      },
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
      render: (status, data) => (
        <CenteredContainer>
          {status == 1 ? (
            <Button
              onClick={() => store.dispatch(toggleEmployeeStatus(data))}
              type="link"
            >
              Deactivate
            </Button>
          ) : (
            <Button
              onClick={() => store.dispatch(toggleEmployeeStatus(data))}
              type="link"
            >
              Activate
            </Button>
          )}
        </CenteredContainer>
      ),
    },
  ];

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
      dataSource={filteredEmployees}
    />
  );
};

export default TableView;
