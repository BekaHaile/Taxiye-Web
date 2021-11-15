import React, { FC, FunctionComponent } from "react";
import styled from "styled-components";
import TabHeader from "./tab-header";
import BookingForm from "./booking-form";
import RentalForm from "./rental-form";
import StationForm from "./station-form";
import DeliveryForm from "./delivery-form";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { changeBookingType } from "../../redux/actions/booking";
import theme from "../../theme/main";

const TabContainer = styled("div")`
  background: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  max-width: 490px;

  @media (max-width: 768px) {
    margin: 10px auto;
  }
  @media (max-width: 490px) {
    width: 100%;
  }
`;

const TabWrapper = styled("div")`
  display: block;
  height: inherit;
  margin: auto;
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
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

const TabButton = styled.a`
  font-weight: normal;
  font-size: 14px;

  line-height: 29px;
  color: ${theme.colors.primaryTextColor};
  text-decoration: none;
  padding: 0px 20px;
  &&.active {
    color: ${theme.colors.white};
    text-align: center;
    background: ${theme.colors.primary};
    border-radius: 50px;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 2.5vw;
    line-height: 4vw;
    padding: 2px;
  }
  @media (max-width: 500px) {
    font-size: 3.2vw;
    line-height: 4vw;
    padding: 2px;
  }
`;

interface Props {
  contentView?;
  bookingFormContent?;
}
interface FormContent {
  key?: string;
  type?: string;
  title?: string;
  subTitle?: string;
}
const Tab: FC<Props> = ({ contentView, bookingFormContent }) => {
  const activeTab = useSelector((state) => state["booking"]["type"]);
  return (
    <TabContainer>
      {contentView != null ? <TabHeader></TabHeader> : null}

      <TabButtonWrappers>
        {bookingFormContent?.map((form: any) => (
          <TabButton
            className={activeTab === form.key ? "active" : null}
            onClick={() => {
              store.dispatch(changeBookingType(form.key));
            }}
          >
            {form.type}
          </TabButton>
        ))}
      </TabButtonWrappers>
      <ChildrenContainer>
        {bookingFormContent?.map((form: any) => {
          if (activeTab === form.key)
            return <BookingForm contentView={contentView} formData={form} />;
        })}
      </ChildrenContainer>
    </TabContainer>
  );
};

export default Tab;
