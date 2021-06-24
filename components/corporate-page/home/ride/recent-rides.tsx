import React from "react";
import styled from "styled-components";
import { Space, Typography, Table } from "antd";
const { Text } = Typography;
const Title = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #444444;
`;
const Container = styled("div")`
  height: 422px;
`;
const TableContainer = styled("div")`
  overflow-y: scroll;
  height:422px;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Request Time",
    dataIndex: "requestTime",
  },
  {
    title: "Pick up Location",
    dataIndex: "pickupLocation",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
];
const data = [
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
  {
    key: "1",
    name: "Bessie Cooper",
    requestTime: "2020-02-06 12:10 AM",
    pickupLocation: "Sarbet, Addis Ababa",
    amount: "$406.27",
  },
];
const RecentRides = () => {
  return (
    <>
      <Container>
        <Space style={{ width: "100%" }} size={16} direction="vertical">
          <Title>Recent Rides</Title>
          <TableContainer>
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              size="middle"
            />
          </TableContainer>
        </Space>
      </Container>
    </>
  );
};

export default RecentRides;
