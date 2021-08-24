import React from "react";
import { Table, Space, Button, Tag, Pagination, Card } from "antd";
import { useState } from "react";
import styled from "styled-components";
import theme from "../../../theme/main";
import { useSelector } from "react-redux";
import Order from "./item/";

const Link = styled("a")`
  color: ${theme.colors.primary};
`;
const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  height:100%;
  width:auto;
  gap:16px;
`;

const CustomPaggination = styled(Pagination)`
  margin-left:auto;
  width: fit-content;
`;

const TableView = () => {
  return (
    <>
      <Card>
        <Container>
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </Container>
        <CustomPaggination defaultPageSize={6} defaultCurrent={1} total={50} />
      </Card>
    </>
  );
};

export default TableView;
