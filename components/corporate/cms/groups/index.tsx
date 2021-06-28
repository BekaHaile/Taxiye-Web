import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import TopActions from "./header-actions";
import List from "./list";


const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Groups = () => {
  return (
    <>
      <CustomSpace size={16} direction="vertical">
        <TopActions />
        <List />
      </CustomSpace>
    </>
  );
};

export default Groups;
