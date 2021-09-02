import React, {useEffect} from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import { fetchGroups } from "../../../../redux/actions/corporate/group";

import { Row, Col, Card, Space, Typography, Spin, Empty } from "antd";

const { Text } = Typography;

const MainCard = styled(Card)`
  background: ${theme.colors.white};;
  border: 1px solid #eff2f5;
  box-sizing: border-box;
  border-radius: 5px;
`;

const LoaderCard = styled(Card)`
  text-align: center;
`;

const Container = styled("div")`
  padding: 16px !important;
`;

const FlexContainer = styled(Space)`
  width: 100%;
  cursor: pointer;
`;

const VerticalFlexContainer = styled(Space)`
  width: 100%;
`;

const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.colors.primaryTextColor};
  &:after {
    content: url(${require("../../../../assets/icons/edit-icon.svg")});
    position: absolute;
    right: 17px;
  }
`;
const SubTitle = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${theme.colors.primaryTextColor}; ;
`;
const CardActionTitle = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.secondaryTextColor};
`;
const CardActionSubText = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color: ${theme.colors.primaryTextColor}; ;
`;

const Icon = styled("img")`
  height: 24px;
  width: 24px;
`;
const Loader = styled(Spin)``;
const EmptyData = styled(Empty)`
  margin: auto;
`;

const Hr = styled("hr")`
  opacity: 0.3;
`;

const MainRow = styled(Row)`
row-gap:24px !important;`;

const List = () => {
  useEffect(() => {
    store.dispatch(fetchGroups());
  }, []);
  const loading = useSelector((state) => state["corporate_group"]["loading"]);
  const groups = useSelector((state) => state["corporate_group"]["groups"]);
  return (
    <>
      <Container>
        {loading ? (
          <LoaderCard>
            <Loader />
          </LoaderCard>
        ) : (
          groups && (
            <MainRow gutter={24}>
              {groups.length == 0 ? (
                <EmptyData
                  description={
                    <span>
                      No Groups Data{" "}
                      <a onClick={() => store.dispatch(fetchGroups())}>Retry</a>
                    </span>
                  }
                />
              ) : (
                groups.map((group) => (
                  <Col className="gutter-row" span={8}>
                    <MainCard bodyStyle={{ padding: "16px" }}>
                      <VerticalFlexContainer direction="vertical" size={16}>
                        <FlexContainer direction="vertical" size={16}>
                          <Title>{group.title}</Title>

                          <SubTitle>{group.balance}</SubTitle>
                        </FlexContainer>
                        <Hr />
                        <Space size={48}>
                          <Space align="start" direction="vertical">
                            <CardActionTitle>Max. Rides</CardActionTitle>
                            <CardActionSubText>
                              {group.maximum_rides}
                            </CardActionSubText>
                          </Space>

                          <Space align="start" direction="vertical">
                            <CardActionTitle>Employees</CardActionTitle>
                            <CardActionSubText>
                              {group.employees}
                            </CardActionSubText>
                          </Space>

                          <Space align="start" direction="vertical">
                            <CardActionTitle>Payment</CardActionTitle>
                            <CardActionSubText>
                              {group.payment}
                            </CardActionSubText>
                          </Space>
                        </Space>
                      </VerticalFlexContainer>
                    </MainCard>
                  </Col>
                ))
              )}
            </MainRow>
          )
        )}
      </Container>
    </>
  );
};

export default List;
