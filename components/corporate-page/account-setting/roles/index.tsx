import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import TopActions from "./header-actions";
import Table from "./table";

const Roles = () => {
  return (
    <>
      <TopActions />
      <Table />
    </>
  );
};

export default Roles;
