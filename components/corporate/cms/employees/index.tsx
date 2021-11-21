import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import TopActions from "./header-actions";
import Table from "./table";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  getEmployees,
  changeRoute,
} from "../../../../redux/actions/corporate/employees";
import CreateEmployee from "./forms";
const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;
const Employees = () => {
  const route = useSelector((state) => state["corporate_employees"]["route"]);
  useEffect(() => {
    store.dispatch(changeRoute(""));
    store.dispatch(getEmployees());
  }, []);
  
  return (
    <>
      {route == "create" ? (
        <CreateEmployee />
      ) : (
        <CustomSpace size={16} direction="vertical">
          <TopActions />
          <Table />
        </CustomSpace>
      )}
    </>
  );
};

export default Employees;
