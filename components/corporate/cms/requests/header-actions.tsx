import React from "react";
import styled from "styled-components";
import { Button, Input, Card, Typography, Space } from "antd";
const { Text } = Typography;
const { Search } = Input;
import { PlusOutlined } from "@ant-design/icons";
const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
`;
const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Requests = () => {
  const onSearch = () => {
    console.log("searching");
  };
  return (
    <>
      <Card>
        <CustomSpace>
          <Title>Requests</Title>
          <Space size={16}>
            <Search
              placeholder="Search by name"
              allowClear
              onSearch={onSearch}
            />
            <Button type="primary" icon={<PlusOutlined />}>
              Add New
            </Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Requests;
