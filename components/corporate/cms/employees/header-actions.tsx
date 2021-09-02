import React from "react";
import styled from "styled-components";
import { Button, Input, Card, Typography, Space } from "antd";
const { Text } = Typography;
const { Search } = Input;
import { PlusOutlined } from "@ant-design/icons";
import theme from "../../../../theme/main";
import store from "../../../../redux/store";
import { useSelector } from "react-redux";
import {
  getEmployees,
  addApiQuery,
  changeRoute
} from "../../../../redux/actions/corporate/employees";

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
  const loading = useSelector(
    (state) => state["corporate_employees"]["loading"]
  );
  const query = useSelector((state) => state["corporate_employees"]["q"]);
  const onSearch = (val) => {
    if (val == "") store.dispatch(addApiQuery(""));
    store.dispatch(getEmployees());
  };

  const onInput = (e) => {
    var val = e.target.value;
    if (val == "") {
      store.dispatch(getEmployees());
    }
    store.dispatch(addApiQuery(val));
  };

  return (
    <>
      <Card>
        <CustomSpace>
          <Title>Employees</Title>
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
            <Button onClick={() => {
                store.dispatch(changeRoute("create"));
              }} disabled={loading} type="primary" icon={<PlusOutlined />}>
              Add New
            </Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Employees;
