import React from "react";
import styled from "styled-components";
import {
  Button,
  Input,
  Card,
  Typography,
  Space,
  DatePicker,
  Select,
} from "antd";
const { Text } = Typography;
const { Search } = Input;
import { ReloadOutlined } from "@ant-design/icons";
const { Option } = Select;
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

const CompletedRides = () => {
  const onSearch = () => {
    console.log("searching");
  };
  return (
    <>
      <Card>
        <CustomSpace>
          <Title>Completed Rides</Title>
          <Space size={16}>
            <DatePicker />
            <Select defaultValue="Select City">
              <Option value="Addis Ababa">Addis Ababa</Option>
              <Option value="Adama">Adama</Option>
            </Select>

            <Search
              placeholder="Search by name"
              allowClear
              onSearch={onSearch}
            />
            <Button type="text" icon={<ReloadOutlined />}></Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default CompletedRides;
