import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import TopActions from "./header-actions";
import List from "./list";
import CreateGroup from "./forms";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { changeRoute } from "../../../../redux/actions/corporate/group";

const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Groups = () => {
  const route = useSelector((state) => state["corporate_group"]["route"]);
  useEffect(() => {
    store.dispatch(changeRoute(""));
  }, []);
  return (
    <>
      {route == "create" || route == "update" ? (
        <CreateGroup />
      ) : (
        <CustomSpace size={16} direction="vertical">
          <TopActions />
          <List />
        </CustomSpace>
      )}
    </>
  );
};

export default Groups;
