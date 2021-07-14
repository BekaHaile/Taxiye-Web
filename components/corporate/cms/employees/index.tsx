import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import TopActions from "./header-actions";
import Table from "./table";
import { useEffect } from "react";
import store from "../../../../redux/store";
import {
  getEmployees,
} from "../../../../redux/actions/corporate/employees";

const Employees = () => {
  useEffect(() => {
    store.dispatch(getEmployees());
  }, []);
  return (
    <>
      <TopActions />
      <Table />
    </>
  );
};

export default Employees;
