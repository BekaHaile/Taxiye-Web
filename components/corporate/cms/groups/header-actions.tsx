import React from "react";
import styled from "styled-components";
import { Button, Input, Card, Typography, Space } from "antd";
import theme from "../../../../theme/main";
import store from "../../../../redux/store";
import {
  changeRoute,
  fetchGroups,
  queryAdded,
} from "../../../../redux/actions/corporate/group";
import { useSelector } from "react-redux";

const { Text } = Typography;
const { Search } = Input;
import { PlusOutlined } from "@ant-design/icons";
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

const Employees = () => {
  const loading = useSelector((state) => state["corporate_group"]["loading"]);
  const query = useSelector((state) => state["corporate_group"]["query"]);

  const onSearch = (val) => {
    if (val == "") store.dispatch(queryAdded(""));
    store.dispatch(fetchGroups());
  };

  const onInput = (e) => {
    var val = e.target.value;
    if (val == "") store.dispatch(fetchGroups());
    store.dispatch(queryAdded(e.target.value));
  };

  return (
    <>
      <Card>
        <CustomSpace>
          <Title>Groups</Title>
          <Space size={16}>
            <Search
              value={query}
              placeholder="Search by group name"
              allowClear
              onSearch={onSearch}
              onInput={onInput}
              loading={loading}
              disabled={loading}
            />
            <Button
              onClick={() => {
                store.dispatch(changeRoute("create"));
              }}
              type="primary"
              icon={<PlusOutlined />}
              disabled={loading}
            >
              Add New
            </Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Employees;
