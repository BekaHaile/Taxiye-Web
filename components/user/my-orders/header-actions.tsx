import React from "react";
import styled from "styled-components";
import theme from "../../../theme/main";

import {
  Button,
  Input,
  Card,
  Typography,
  Space,
  Radio,
  Select,
} from "antd";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import {
  cityChanged,
  dateChanged,
  searchQueryChanged,
  reset,
  fetchRides,
} from "../../../redux/actions/corporate/rides";

const { Text } = Typography;
const { Search } = Input;
import { ReloadOutlined } from "@ant-design/icons";
const { Option } = Select;
const Title = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.primaryTextColor}; ;
`;
const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Rides = () => {
  const onSearch = (val) => {
    if (val == "") store.dispatch(searchQueryChanged(""));
    store.dispatch(fetchRides());
  };

  const onInput = (e) => {
    var val = e.target.value;
    if (val == "") store.dispatch(fetchRides());
    store.dispatch(searchQueryChanged(e.target.value));
  };

  const date = useSelector((state) => state["corporate_rides"]["date"]);
  const city = useSelector((state) => state["corporate_rides"]["city"]);
  const cities = useSelector((state) => state["corporate_rides"]["cities"]);
  const query = useSelector((state) => state["corporate_rides"]["query"]);
  const loading = useSelector((state) => state["corporate_rides"]["loading"]);
  return (
    <>
      <Card>
        <CustomSpace>
          <Title>My Orders</Title>
          <Space size={16}>
            <Radio.Group  defaultValue="all">
              <Radio.Button value="all">All</Radio.Button>
              <Radio.Button value="completed">Completed</Radio.Button>
              <Radio.Button value="canceled">Canceled</Radio.Button>
              <Radio.Button value="scheduled">Scheduled</Radio.Button>
            </Radio.Group>
            <Search
              value={query}
              placeholder="Search by name"
              allowClear
              onSearch={onSearch}
              loading={loading}
              onInput={onInput}
            />
           
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Rides;
