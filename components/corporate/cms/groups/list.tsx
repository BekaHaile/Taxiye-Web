import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";

import { Row, Col, Card, Space, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Text } = Typography;

const MainCard = styled(Card)`
  background: #ffffff;
  border: 1px solid #eff2f5;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Container = styled("div")`
  padding: 16px !important;
`;


const FlexContainer = styled(Space)`
  width: 100%;
  cursor:pointer;
  
`;

const VerticalFlexContainer = styled(Space)`
  width: 100%;
`;

const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color:${theme.colors.primaryTextColor};;
  &:after{
    content:url(${require("../../../../assets/icons/edit-icon.svg")});
    position: absolute;
    right: 17px;
   
  }
`;
const SubTitle = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color:${theme.colors.primaryTextColor};;
`;
const CardActionTitle = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.secondaryTextColor};
`;
const CardActionSubText = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color:${theme.colors.primaryTextColor};;
`;

const Icon = styled("img")`
  height: 24px;
  width: 24px;
`;
const Hr = styled("hr")`
  opacity:0.3;
`;

const MainRow = styled(Row)`
 
`;

const groups = [
  {
    title: "Taxiye Employees",
    balance: "10,000.00 Birr",
    maximum_rides: 3333,
    employees: 455,
    payment: "Manual",
  },
  {
    title: "Taxiye Employees",
    balance: "10,000.00 Birr",
    maximum_rides: 3333,
    employees: 455,
    payment: "Manual",
  },
  
  {
    title: "Taxiye Employees",
    balance: "10,000.00 Birr",
    maximum_rides: 3333,
    employees: 455,
    payment: "Manual",
  },
];

const List = () => {
  return (
    <>
      <Container>
        <MainRow gutter={24}>
          {groups.map((group) => (
            <Col className="gutter-row" span={8}>
              <MainCard bodyStyle={{ padding: "16px" }}>
                <VerticalFlexContainer direction="vertical" size={16}>
                  <FlexContainer direction="vertical" size={16}>
                    <Title>{group.title}</Title>

                    <SubTitle>{group.balance}</SubTitle>
                  </FlexContainer>
                  <Hr/>
                  <Space size={48}>
                    <Space align="start" direction="vertical">
                      <CardActionTitle>Max. Rides</CardActionTitle>
                      <CardActionSubText>
                        {group.maximum_rides}
                      </CardActionSubText>
                    </Space>

                    <Space align="start" direction="vertical">
                      <CardActionTitle>Employees</CardActionTitle>
                      <CardActionSubText>{group.employees}</CardActionSubText>
                    </Space>

                    <Space align="start" direction="vertical">
                      <CardActionTitle>Payment</CardActionTitle>
                      <CardActionSubText>{group.payment}</CardActionSubText>
                    </Space>
                  </Space>
                </VerticalFlexContainer>
              </MainCard>
            </Col>
          ))}
        </MainRow>
      </Container>
    </>
  );
};

export default List;
