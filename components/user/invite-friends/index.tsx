import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Typography, Space, Tag } from "antd";
import TopActions from "./header-actions";
import Content from "./content";
import store from "../../../redux/store";
import {
  fetchRides,
  setSelectedType,
} from "../../../redux/actions/corporate/rides";
import { useEffect } from "react";
import { useState } from "react";


const Rides = () => {


  return (
    <>
      <TopActions />
      <Content />
    </>
  );
};

export default Rides;
