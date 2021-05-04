import React, { useState } from "react";
import styled from "styled-components";
import BookingForm from "./booking-form";
import RentalForm from "./rental-form";
import StationForm from "./station-form";
import DeliveryForm from "./delivery-form";

const TabWrapper = styled("div")`
  padding: 10px 20px 15px;
  width: 500px;
  height: 392px;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

const TabButtonWrappers = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0px 30px;
`;

const TabButton = styled.a`
  font-weight: normal;
  font-size: 14px;
  line-height: 29px;
  color: #444444;
  text-decoration: none;
  padding: 5px 20px;
  &&.active {
    color: #ffffff;
    height: 29px;
    background: #A02167;
    border-radius: 50px;
    text-align: center;
  }
`;

const Tab = () => {
  const [activeTab, setActiveTab] = useState("demand");
  return (
    <TabWrapper>
      <TabButtonWrappers>
        <TabButton
          className={activeTab === "demand" ? "active" : null}
          onClick={() => setActiveTab("demand")}
          href="#demand"
        >
          On Demand
        </TabButton>
        <TabButton
          className={activeTab === "rental" ? "active" : null}
          onClick={() => setActiveTab("rental")}
          href="#rental"
        >
          Rental
        </TabButton>
        <TabButton
          className={activeTab === "station" ? "active" : null}
          onClick={() => setActiveTab("station")}
          href="#station"
        >
          Our Station
        </TabButton>
        <TabButton
          className={activeTab === "delivery" ? "active" : null}
          onClick={() => setActiveTab("delivery")}
          href="#delivery"
        >
          Delivery
        </TabButton>
      </TabButtonWrappers>
      {(() => {
        if (activeTab === "demand") return <BookingForm />;
        if (activeTab === "rental") return <RentalForm />;
        if (activeTab === "station") return <StationForm />;
        if (activeTab === "delivery") return <DeliveryForm />;
      })()}
    </TabWrapper>
  );
};

export default Tab;
