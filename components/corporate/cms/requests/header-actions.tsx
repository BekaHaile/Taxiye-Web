import React from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { Button, Input, Card, Typography, Space } from "antd";
const { Text } = Typography;
const { Search } = Input;
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  changeQuery,
  fetchRequests,
} from "../../../../redux/actions/corporate/requests";

const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.primaryTextColor}; ;
`;
const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Requests = () => {
  const query = useSelector((state) => state["corporate_requests"]["query"]);
  const loading = useSelector((state) => state["corporate_requests"]["loading"]);

  const onSearch = (val) => {
    if (val == "") store.dispatch(changeQuery(""));
    store.dispatch(fetchRequests());
  };
  const onInput = (e) => {
    var val = e.target.value;
    if (val == "") store.dispatch(fetchRequests());
    store.dispatch(changeQuery(e.target.value));
  };
  return (
    <>
      <Card>
        <CustomSpace>
          <Title>Requests</Title>
          <Space size={16}>
            <Search
              value={query}
              placeholder="Search by name"
              allowClear
              onSearch={onSearch}
              onInput={onInput}
              loading={loading}
              disabled={loading}
            />
            <Button type="primary" icon={<PlusOutlined disabled={loading}/>}>
              Add New
            </Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Requests;
