import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space, Modal } from "antd";
import TopActions from "./header-actions";
import Table from "./table";
import { useState } from "react";
import Registration from "./registration";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import { resetNewForm, saveNewForm } from "../../../../../redux/actions/corporate/account";

const Roles = () => {
  const isValid = useSelector(
    (state) => state["corporate_account"]["roles"]["user"]["isValid"]
  );
  const loading = useSelector(
    (state) => state["corporate_account"]["roles"]["user"]["loading"]
  );
  const [visible, setVisibility] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  function handleCancel() {
    store.dispatch(resetNewForm());
    setVisibility(false);
  }
  function handleOk() {
    setVisibility(false);
    store.dispatch(saveNewForm());
  }

  return (
    <>
      <TopActions action={() => setVisibility(true)} />
      <Table />
      <Modal
        title="Invite People"
        visible={visible}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
        okText="Save"
        okButtonProps={{ disabled: !isValid }}
      >
        <Registration />
      </Modal>
    </>
  );
};

export default Roles;
