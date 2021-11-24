import React from "react";
import styled from "styled-components";
import { Row, Space, Card, Button, Col } from "antd";
import FirstSide from "./first-side";
import SecondSide from "./second-side";
import theme from "../../../../../theme/main";
import store from "../../../../../redux/store";
import {
  changeRoute,
  resetForm,
  addGroup,
  updateGroup,
} from "../../../../../redux/actions/corporate/group";
import { useSelector } from "react-redux";

const MainCard = styled(Card)`
  height: 100%;
`;

const BackButton = styled("img")`
  height: 30px;
`;
const Container = styled("div")`
  display: flex;
  gap: 20px;
  padding-bottom: 40px;
  text-align: center;
`;
const Title = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.primaryTextColor};
  margin: auto 0;
`;

const Groups = () => {
  const isValid = useSelector((state) => state["corporate_group"]["isValid"]);
  const loading = useSelector((state) => state["corporate_group"]["loading"]);
  const group_id = useSelector((state) => state["corporate_group"]["group_id"]);
  const route = useSelector((state) => state["corporate_group"]["route"]);

  return (
    <>
      <MainCard>
        <Container>
          <BackButton
            onClick={() => {
              store.dispatch(changeRoute(""));
            }}
            src={require("../../../../../assets/icons/back-arrow.svg")}
          />
          <Title>
            {route == "update" && group_id != null
              ? "Update Group"
              : "Add New Group"}
          </Title>
        </Container>
        <Row gutter={40}>
          <Col span={12}>
            <FirstSide />
          </Col>
          <Col span={12}>
            <SecondSide />
          </Col>
        </Row>
        <Space size={16}>
          {route == "update" && group_id != null ? (
            <Button
              onClick={() => {
                store.dispatch(updateGroup());
              }}
              disabled={!isValid || loading}
              type="primary"
            >
              Update
            </Button>
          ) : (
            <Button
              onClick={() => {
                store.dispatch(addGroup());
              }}
              disabled={!isValid || loading}
              type="primary"
            >
              Save
            </Button>
          )}
          <Button
            disabled={loading}
            onClick={() => {
              store.dispatch(resetForm());
            }}
          >
            Cancel
          </Button>
        </Space>
      </MainCard>
    </>
  );
};

export default Groups;
