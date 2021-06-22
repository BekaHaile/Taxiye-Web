import React, { useState } from "react";
import styled from "styled-components";
import TabHeader from "./tab-header";
import BookingForm from "./booking-form";
import RentalForm from "./rental-form";
import StationForm from "./station-form";
import DeliveryForm from "./delivery-form";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { changeBookingType } from "../../redux/actions/booking";


const TabContainer = styled("div")`
background: #ffffff;
border-radius: 5px;
display:flex;
flex-direction:column;
height: -webkit-fill-available;
max-width:490px;

`;

const TabWrapper = styled("div")`
  display:block;
  height:inherit;
  margin:auto;
`;
const ChildrenContainer = styled("div")`
overflow-y: auto;
height: -webkit-fill-available;
position: relative;
`;

const TabButtonWrappers = styled("div")`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    text-align: center;
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

const Tab = ({contentView }) => {
  const activeTab = useSelector((state) => state["booking"]["type"]);
  return (


    <TabContainer>


      {contentView != null ? <TabHeader></TabHeader> : null}

      <TabButtonWrappers>
        <TabButton
          className={activeTab === "on-demand" ? "active" : null}
          onClick={() => {
            store.dispatch(changeBookingType("on-demand"));
          
          }}
        >
          On Demand
        </TabButton>
        <TabButton
          className={activeTab === "rental" ? "active" : null}
          onClick={() => {
            store.dispatch(changeBookingType("rental"));
            
          }}
        >
          Rental
        </TabButton>
        <TabButton
          className={activeTab === "out-station" ? "active" : null}
          onClick={() => {
            store.dispatch(changeBookingType("out-station"));
            
          }}
        >
          Out Station
        </TabButton>
        <TabButton
          className={activeTab === "delivery" ? "active" : null}
          onClick={() => {
            store.dispatch(changeBookingType("delivery"));
            
          }}
        >
          Delivery
        </TabButton>
      </TabButtonWrappers>
      <ChildrenContainer>

        {(() => {
          if (activeTab === "on-demand") return <BookingForm contentView={contentView} />;
          if (activeTab === "rental") return <RentalForm contentView={contentView} />;
          if (activeTab === "out-station") return <StationForm contentView={contentView} />;
          if (activeTab === "delivery") return <DeliveryForm contentView={contentView} />;
        })()}

      </ChildrenContainer>


    </TabContainer>

  );
};

export default Tab;
