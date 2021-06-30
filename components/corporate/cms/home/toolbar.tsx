import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { Typography, Space } from "antd";
const { Text } = Typography;

const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color:${theme.colors.primaryTextColor};;
`;
const SubTitle = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

const ToolBar = () => {
  return (
    <>
      <Space size={5} direction="vertical">
        <Title>Welcome, Nahom Ab</Title>
        <SubTitle>Here are some recent highlights of your company.</SubTitle>
      </Space>
    </>
  );
};

export default ToolBar;
