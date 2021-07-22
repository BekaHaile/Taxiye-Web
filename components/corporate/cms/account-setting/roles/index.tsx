import React, { useEffect } from "react";
import styled from "styled-components";
import {Spin, Button, Drawer } from "antd";
import TopActions from "./header-actions";
import Table from "./table";
import { useState } from "react";
import Registration from "./registration";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import {
  resetNewForm,
  saveNewForm,
} from "../../../../../redux/actions/corporate/account";

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
  function handleSubmit() {
    setVisibility(false);
    store.dispatch(saveNewForm());
  }

  return (
    <>
      <TopActions action={() => setVisibility(true)} />
      <Table />
      <Drawer
        width="30%"
        title="Invite People"
        visible={visible}
        onClose={handleCancel}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={handleCancel} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button disabled={!isValid} onClick={handleSubmit} type="primary">
              {loading ? <Spin/> : <span>Submit</span>}
            </Button>
          </div>
        }
      >
        <Registration />
      </Drawer>
    </>
  );
};

export default Roles;
