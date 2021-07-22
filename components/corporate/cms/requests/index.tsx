import React, {useState} from "react";
import styled from "styled-components";
import { Row, Col, Spin, Drawer, Button } from "antd";
import TopActions from "./header-actions";
import Table from "./list";
import Registration from "./registration";
import { useSelector } from "react-redux";

const Requests = () => {
  const [visible, setVisibility] = useState(false);
  const loading = useSelector(
    (state) => state["corporate_requests"]["isLoading"]
  );
  const isValid = useSelector(
    (state) => state["corporate_requests"]["isValid"]
  );
  function handleCancel() {
    // store.dispatch(resetNewForm());
    setVisibility(false);
  }
  function handleSubmit() {
    setVisibility(false);
    // store.dispatch(saveNewForm());
  }
  return (
    <>
      <TopActions action={()=>setVisibility(true)} />
      <Table />
      <Drawer
        width="30%"
        title="Add request"
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
               <span>Submit</span>
            </Button>
          </div>
        }
      >
        <Registration />
      </Drawer>
    </>
  );
};

export default Requests;
