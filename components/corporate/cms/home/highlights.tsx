import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space, Spin, Skeleton } from "antd";
import theme from "../../../../theme/main";
import { useSelector } from "react-redux";

const { Text } = Typography;
import { TeamOutlined } from "@ant-design/icons";
const Title = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${theme.colors.secondaryTextColor};
`;
const Conent = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
`;
const MainCard = styled(Card)`
  background: #ffffff;
  border: 1px solid #eff2f5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px !important;
`;
const Icon = styled("img")`
  height: 24px;
  width: 24px;
`;
const Loader = styled("div")`
  padding-top:10px;
`;
const lists = [
  {
    title: "Employees",
    icon: require("../../../../assets/icons/employees-icon.svg"),
    content: "4545 Birr",
    key:"employees",
    color: "#1890FF",
  },
  {
    title: "Total Rides this month",
    icon: require("../../../../assets/icons/car-icon.svg"),
    content: "4545 Birr",
    key:"rides",
    color: "#A02167",
  },
  {
    title: "Total Bills this month",
    icon: require("../../../../assets/icons/bill-icon.svg"),
    content: "4545 Birr",
    key:"bills",
    color: "#F8B219",
  },
  {
    title: "Available Balance ",
    icon: require("../../../../assets/icons/balance-icon.svg"),
    content: "4545 Birr",
    key:"balance",
    color: "#20AA46",
  },
];

const Services = () => {
  const loading = useSelector(
    (state) => state["corporate_home"]["overviewLoading"]
  );
  const overview = useSelector(
    (state) => state["corporate_home"]["overview"]
  );
  return (
    <>
      <Row gutter={24}>
        { lists.map((list) => (
          <Col className="gutter-row" span={6}>
            <MainCard bodyStyle={{ padding: "0" }} bordered={false}>
              <Title>{list.title}</Title>
              {loading ? (
                <Loader>
                  <Skeleton.Input  style={{ width: 250, height:20 }} active={true}/>
                  </Loader>
              ) : (
                <div style={{ color: list.color }}>
                  <Space size={5}>
                    <Icon src={list.icon} />
                    <Conent style={{ color: list.color }}>
                      {overview && overview[list.key]}
                    </Conent>
                  </Space>
                </div>
              )}
            </MainCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Services;
