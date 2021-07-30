import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space, Tag } from "antd";
import TopActions from "./header-actions";
import Table from "./table";
import store from "../../../../../redux/store";
import {
  fetchRides,
  setSelectedType,
} from "../../../../../redux/actions/corporate/rides";
import { useEffect } from "react";
import { useState } from "react";

var onGoingColumn = [
  {
    title: "Name",
    dataIndex: "user_name",
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
    dataIndex: "sub_region_id",
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
    dataIndex: "request_made_on",
    sorter: true,
  },
  {
    title: "Pick up Location",
    dataIndex: "pickup_location_address",
    sorter: true,
  },
  {
    title: "Drop off Location",
    dataIndex: "drop_location_address",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: true,
    render: (val) => {
      let color = "green";
      let status = "On going";
      
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

var completedColumn = [
  {
    title: "Name",
    dataIndex: "user_name",
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
    dataIndex: "sub_region_id",
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
    dataIndex: "request_made_on",
    sorter: true,
  },
  {
    title: "Pick up Location",
    dataIndex: "pickup_location_address",
    sorter: true,
  },
  {
    title: "Drop off Location",
    dataIndex: "drop_location_address",
    sorter: true,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: true,
  },
];

const Rides = ({ type }) => {
  const [tableColumns, setColumns] = useState(onGoingColumn);

  useEffect(() => {
    store.dispatch(setSelectedType(type));
    var col = tableColumns;
    if (type == "completed") {
      setColumns(completedColumn);
    } else if (type == "on-going") {
      setColumns(onGoingColumn);
    }
  }, [type]);

  return (
    <>
      <TopActions type={type} />
      <Table columns={tableColumns} />
    </>
  );
};

export default Rides;
