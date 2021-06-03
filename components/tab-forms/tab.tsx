import React, { useState } from "react";
import styled from "styled-components";
import TabHeader from "./tab-header";
import BookingForm from "./booking-form";
import RentalForm from "./rental-form";
import StationForm from "./station-form";
import DeliveryForm from "./delivery-form";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import store from "../../redux/store";
import { bookingTypeChanged } from "../../redux/actions/booking";


const TabContainer = styled("div")`
background: #ffffff;
border-radius: 5px;
display:inherit;
`;

const TabWrapper = styled("div")`
  display:block;
  margin:auto;
`;
const ChildrenContainer = styled("div")`
overflow-y: auto;
max-height:500px;
`;

const TabButtonWrappers = styled("div")`
  display: flex;
    padding: 10px 20px;
    margin: auto;
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

const Tab = ({setSelectedContent,contentView}) => {
  const activeTab = useSelector((state) => state["type"]);


  const router = useRouter(); 
  return (
    <TabContainer>
     {contentView!=null? <TabHeader></TabHeader>:null}
    <TabWrapper>
      
      <TabButtonWrappers>
        <TabButton
          className={activeTab === "on-demand" ? "active" : null}
          onClick={() =>{ 
            store.dispatch(bookingTypeChanged("on-demand"));
            if(setSelectedContent)
            setSelectedContent("on-demand");
          }}
        >
          On Demand
        </TabButton>
        <TabButton
          className={activeTab === "rental" ? "active" : null}
          onClick={() => { 
            store.dispatch(bookingTypeChanged("rental"));
            if(setSelectedContent)
            setSelectedContent("rental");
          }}
        >
          Rental
        </TabButton>
        <TabButton
          className={activeTab === "out-station" ? "active" : null}
          onClick={() => { 
            store.dispatch(bookingTypeChanged("out-station"));
            if(setSelectedContent)
            setSelectedContent("out-station");
          }}
        >
          Out Station
        </TabButton>
        <TabButton
          className={activeTab === "delivery" ? "active" : null}
          onClick={() => { 
            store.dispatch(bookingTypeChanged("delivery"));
            if(setSelectedContent)
            setSelectedContent("delivery");
          }}
        >
          Delivery
        </TabButton>
      </TabButtonWrappers>
      <ChildrenContainer>
      
      {(() => {
        if (activeTab === "on-demand") return <BookingForm contentView={contentView}/>;
        if (activeTab === "rental") return <RentalForm contentView={contentView}/>;
        if (activeTab === "out-station") return <StationForm contentView={contentView}/>;
        if (activeTab === "delivery") return <DeliveryForm contentView={contentView}/>;
      })()}
      
      </ChildrenContainer>
    </TabWrapper>
    </TabContainer>
  );
};

export default Tab;
