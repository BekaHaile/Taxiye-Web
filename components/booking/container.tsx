import React, { useEffect, useState } from "react";
import Tabs from "../tab-forms/tab";
import styled from "styled-components";
import OnDemand from "./on-demand/";
import Rental from "./rental/";
import OutStation from "./out-station";
import Delivery from "./delivery/";
import Meta from "./delivery/meta";

import { useSelector } from "react-redux";
import {
  initiatePaymentMethodCall,
  getFareEstimate,
} from "../../redux/actions/booking";

import Login from "./login";
import Approve from "./approval";
import Confirmation from "./confirmation";
import store from "../../redux/store";

const ContainerWrapper = styled("div")`
  position: absolute;
  top: 0px;
  margin: 20px;
  height: -webkit-fill-available;
  width: 500px;
  @media (max-width: 768px) {
    position: relative;
    width: auto;
    margin: 0px;
  }
`;

const ChildrenContainer = styled("div")`
  border-top: 5px solid #eff2f5;
  padding: 5px 0px;
`;

const Container = ({ bookingForm }) => {
  const activeTab = useSelector((state) => state["booking"]["type"]);
  const page = useSelector((state) => state["navigation"]["page"]);
  useEffect(() => {
    if (page == "confirm") {
      store.dispatch(getFareEstimate());
      store.dispatch(initiatePaymentMethodCall());
    }
  }, [page]);

  return (
    <ContainerWrapper>
      {page == "login" ? (
        <Login />
      ) : page == "confirm" ? (
        <Confirmation />
      ) : page == "approve" ? (
        <Approve />
      ) : page == "info" ? (
        <Meta />
      ) : (
        <Tabs
          bookingFormContent={bookingForm}
          contentView={
            <ChildrenContainer>
              {activeTab == "rental" ? (
                <Rental />
              ) : activeTab == "out-station" ? (
                <OutStation />
              ) : activeTab == "delivery" ? (
                <Delivery />
              ) : (
                <OnDemand />
              )}
            </ChildrenContainer>
          }
        />
      )}
    </ContainerWrapper>
  );
};

export default Container;
