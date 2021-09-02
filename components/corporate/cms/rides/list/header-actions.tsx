import React from "react";
import styled from "styled-components";
import theme from "../../../../../theme/main";

import {
  Button,
  Input,
  Card,
  Typography,
  Space,
  DatePicker,
  Select,
} from "antd";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import {
  cityChanged,
  dateChanged,
  searchQueryChanged,
  reset,
  fetchRides,
} from "../../../../../redux/actions/corporate/rides";

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

const Rides = ({ type }) => {
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
          <Title>
            {type == "on-going"
              ? "On Going Rides"
              : type == "completed"
              ? "Compeleted Rides"
              : "Rides"}
          </Title>
          <Space size={16}>
            <DatePicker
              value={date}
              disabled={loading}
              onChange={(e) => {
                store.dispatch(dateChanged(e));
              }}
            />
            <Select
              value={city}
              disabled={loading}
              onChange={(val) => {
                console.log(val);
                store.dispatch(cityChanged(val));
              }}
            >
              <Option disabled key={-1} value={-1}>
                Select city
              </Option>
              {cities.map((city, index) => (
                <Option key={index} value={city.city_id}>
                  {city.city_name}
                </Option>
              ))}
            </Select>

            <Search
              value={query}
              placeholder="Search by name"
              allowClear
              onSearch={onSearch}
              loading={loading}
              onInput={onInput}
            />
            <Button
              disabled={loading}
              onClick={() => store.dispatch(reset())}
              type="text"
              icon={<ReloadOutlined />}
            ></Button>
          </Space>
        </CustomSpace>
      </Card>
    </>
  );
};

export default Rides;
