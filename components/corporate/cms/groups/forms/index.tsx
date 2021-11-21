import React from "react";
import styled from "styled-components";
import { Row, Space, Card, Button } from "antd";
import FirstSide from "./first-side";
import SecondSide from "./second-side";
import theme from "../../../../../theme/main";
import store from "../../../../../redux/store";
import {
  changeRoute,
  resetForm,
  addGroup
} from "../../../../../redux/actions/corporate/group";
import { useSelector } from "react-redux";

const MainCard = styled(Card)`
  height: 100%;
`;

const MainRow = styled(Row)`
  gap: 40px;
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
          <Title>Add New Group</Title>
        </Container>
        <MainRow>
          <FirstSide />
          <SecondSide />
        </MainRow>
        <Space size={16}>
          <Button
            onClick={() => {
              store.dispatch(addGroup());
            }}
            disabled={!isValid || loading}
            type="primary"
          >
            Save
          </Button>
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
