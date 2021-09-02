import React from "react";
import styled from "styled-components";
import theme from "../../../../../theme/main";
import { Button, Input, Card, Typography, Space } from "antd";
const { Text } = Typography;
const { Search } = Input;
import { PlusOutlined } from "@ant-design/icons";
import store from "../../../../../redux/store";
import { useSelector } from "react-redux";
import {
  initiateRolesApiCall,
  setRolesQuery,
} from "../../../../../redux/actions/corporate/account";

const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color:${theme.colors.primaryTextColor};;
`;
const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Roles = ({action}) => {
  const loading = useSelector(
    (state) => state["corporate_account"]["roles"]["loading"]
  );
  const query = useSelector((state) => state["corporate_account"]["roles"]["query"]);
  const onSearch = (val) => {
    if (val == "") store.dispatch(setRolesQuery(""));
    store.dispatch(initiateRolesApiCall());
  };

  const onInput = (e) => {
    var val = e.target.value;
    if (val == "") {
      store.dispatch(initiateRolesApiCall());
    }
    store.dispatch(setRolesQuery(val));
  };
  return (
    <>
      <Card>
        <CustomSpace>
          <Title>User Roles</Title>
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
            <Button onClick={action} disabled={loading} type="primary" icon={<PlusOutlined />}>
              Invite People
            </Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Roles;
