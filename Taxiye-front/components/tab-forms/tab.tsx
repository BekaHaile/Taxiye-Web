import React, { useState } from "react";
import styled from "styled-components";
import TabHeader from "./tab-header";
import BookingForm from "./booking-form";
import RentalForm from "./rental-form";
import StationForm from "./station-form";
import DeliveryForm from "./delivery-form";

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
  const [activeTab, setActiveTab] = useState("demand");

  return (
    <TabContainer>
     {contentView!=null? <TabHeader></TabHeader>:null}
    <TabWrapper>
      <TabButtonWrappers>
        <TabButton
          className={activeTab === "demand" ? "active" : null}
          onClick={() =>{ 
            setActiveTab("demand");
            if(setSelectedContent)
            setSelectedContent("demand");
          }}
          href="#demand"
        >
          On Demand
        </TabButton>
        <TabButton
          className={activeTab === "rental" ? "active" : null}
          onClick={() => { 
            setActiveTab("rental");
            if(setSelectedContent)
            setSelectedContent("rental");
          }}
          href="#rental"
        >
          Rental
        </TabButton>
        <TabButton
          className={activeTab === "station" ? "active" : null}
          onClick={() => { 
            setActiveTab("station");
            if(setSelectedContent)
            setSelectedContent("station");
          }}
          href="#station"
        >
          Our Station
        </TabButton>
        <TabButton
          className={activeTab === "delivery" ? "active" : null}
          onClick={() => { 
            setActiveTab("delivery");
            if(setSelectedContent)
            setSelectedContent("delivery");
          }}
          href="#delivery"
        >
          Delivery
        </TabButton>
      </TabButtonWrappers>
      <ChildrenContainer>
      
      {(() => {
        if (activeTab === "demand") return <BookingForm contentView={contentView}/>;
        if (activeTab === "rental") return <RentalForm contentView={contentView}/>;
        if (activeTab === "station") return <StationForm contentView={contentView}/>;
        if (activeTab === "delivery") return <DeliveryForm contentView={contentView}/>;
      })()}
      
      </ChildrenContainer>
    </TabWrapper>
    </TabContainer>
  );
};

export default Tab;
