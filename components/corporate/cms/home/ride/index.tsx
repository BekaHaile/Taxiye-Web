import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import RecentRides from "./recent-rides";
import Services from "./services";
import theme from "../../../../../theme/main";

const Container = styled("div")`
  
`;

const MainCard = styled(Card)`
  background: ${theme.colors.white};;
  border: 1px solid #eff2f5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px !important;
`;

const Rides = ({setSelected}) => {
  return (
    <>
      <Container>
        <Row gutter={24}>
          <Col className="gutter-row" span={13}>
            <MainCard>
              <RecentRides />
            </MainCard>
          </Col>
          <Col className="gutter-row" span={11}>
            <MainCard>
                <Services setSelected={setSelected}/>
            </MainCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rides;
