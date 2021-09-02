import React from "react";
import styled from "styled-components";
import { Space, Typography, Table } from "antd";
import theme from "../../../../../theme/main";
import { useSelector } from "react-redux";
const { Text } = Typography;
const Title = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${theme.colors.primaryTextColor}; ;
`;
const Container = styled("div")`
  height: 422px;
`;
const TableContainer = styled("div")`
  overflow-y: scroll;
  height: 422px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
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

const RecentRides = () => {
  const loading = useSelector(
    (state) => state["corporate_home"]["recentRidesLoading"]
  );
  const recentRides = useSelector(
    (state) => state["corporate_home"]["recentRides"]
  );
  return (
    <>
      <Container>
        <Space style={{ width: "100%" }} size={16} direction="vertical">
          <Title>Recent Rides</Title>

          <TableContainer>
            <Table
              loading={loading}
              pagination={false}
              columns={columns}
              dataSource={recentRides}
              size="middle"
            />
          </TableContainer>
        </Space>
      </Container>
    </>
  );
};

export default RecentRides;
