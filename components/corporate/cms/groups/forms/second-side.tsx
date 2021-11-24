import React from "react";
import styled from "styled-components";
import { Slider, Form, Checkbox } from "antd";
import VehicleList from "./vehicle-list";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import { timeRangeChanged, changeSelectedDays } from "../../../../../redux/actions/corporate/group";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const step = 15;
const max = 1440;
const min = 0;
const marks = {
  0: "0:00",
  1440: "23:59",
};

function formatter(value) {
  if (value == max) return "23:59";
  return `${Math.floor(value / 60)}:${("0" + Math.floor(value % 60)).slice(
    -2
  )}`;
}
const FormView = () => {
  const [form] = Form.useForm();
  const time_range = useSelector(
    (state) => state["corporate_group"]["time_range"]
  );
  const days = useSelector((state) => state["corporate_group"]["days"]);

  return (
    <>
      <Form layout="vertical" form={form} initialValues={{ remember: true }}>
        {/* <Form.Item label="Days">
          <CheckboxGroup options={plainOptions} value={days} onChange={(days)=>{
            store.dispatch(changeSelectedDays(days));
          }} />
        </Form.Item>
        <Form.Item label="Time Range">
          <Slider
            onChange={(val) => {
              store.dispatch(
                timeRangeChanged({
                  start: formatter(val[0]),
                  end: formatter(val[1]),
                })
              );
            }}
            min={min}
            step={step}
            max={max}
            marks={marks}
            tipFormatter={formatter}
            range={{ draggableTrack: true }}
            defaultValue={[min, max / 2]}
          />
        </Form.Item> */}
        <Form.Item label="Vehicle Type">
          <VehicleList />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormView;
