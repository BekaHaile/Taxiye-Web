import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space } from "antd";
import RecentRides from "./recent-rides";
import Services from "./services";

const Container = styled("div")`
  
`;

const MainCard = styled(Card)`
  background: #ffffff;
  border: 1px solid #eff2f5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px !important;
`;

const Rides = () => {
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
                <Services/>
            </MainCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rides;
