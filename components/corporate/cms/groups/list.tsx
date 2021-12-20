import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";
import {
  fetchGroups,
  initiateGroupUpdate,
} from "../../../../redux/actions/corporate/group";

import { Row, Col, Card, Space, Typography, Spin, Empty, Tag } from "antd";

const { Text } = Typography;

const MainCard = styled(Card)`
  background: ${theme.colors.white};
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
  row-gap: 24px !important;
  flex-wrap: wrap;
`;

const List = () => {
  const loading = useSelector((state) => state["corporate_group"]["loading"]);
  const groups = useSelector((state) => state["corporate_group"]["groups"])?.reverse();
  const q = useSelector((state) => state["corporate_group"]["query"]);
  const [filteredGroups, setFilteredGroups] = useState(groups);
  useEffect(() => {
    store.dispatch(fetchGroups());
  }, []);

  useEffect(() => {
    setFilteredGroups(
      groups.filter((entry) =>
        entry?.group_name.toLowerCase()?.includes(q?.toLowerCase())
      )
    );
  }, [q, groups]);

  return (
    <>
      <Container>
        {loading ? (
          <LoaderCard>
            <Loader />
          </LoaderCard>
        ) : (
          filteredGroups && (
            <MainRow gutter={24} wrap={true}>
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
                filteredGroups.map((group, index) => (
                  <Col className="gutter-row" span={8} key={index}>
                    <MainCard bodyStyle={{ padding: "16px" }}>
                      <VerticalFlexContainer direction="vertical" size={16}>
                        <FlexContainer direction="vertical" size={16}>
                          <Title
                            onClick={() =>
                              store.dispatch(initiateGroupUpdate(group))
                            }
                          >
                            {group?.group_name}
                          </Title>

                          <SubTitle>
                            Monthly Budget: {group?.monthly_budget_limit ?? 0}
                          </SubTitle>
                        </FlexContainer>
                        <Hr />
                        <Space wrap>
                          {group?.monthly_ride_limit && (
                            <Space align="start" direction="vertical">
                              <CardActionTitle>Max. Rides</CardActionTitle>
                              <CardActionSubText>
                                {group?.monthly_ride_limit}
                              </CardActionSubText>
                            </Space>
                          )}

                          {group?.max_members && (
                            <Space align="start" direction="vertical">
                              <CardActionTitle>Employees</CardActionTitle>
                              <CardActionSubText>
                                {group?.max_members}
                              </CardActionSubText>
                            </Space>
                          )}

                          <Space align="start" direction="vertical">
                            <CardActionTitle>Status</CardActionTitle>
                            <CardActionSubText>
                              {group?.is_active ? (
                                <Tag color="success">Active</Tag>
                              ) : (
                                <Tag color="error">In Active</Tag>
                              )}
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
