import React from "react";
import { Form, Icon, FormGroup } from "../../../tab-forms/inputs";
import { FormContainer } from "../../../tab-forms/tab-titles";
import { PrimaryDropDown } from "./inputs/drop-down";
import store from "../../../../redux/store";
import {
  addQuery,
  setSelectedEmployee,
  setSelectedVehicle,
} from "../../../../redux/actions/corporate/employees";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

const Container = styled("div")`
  width: 100%;
`;
const CustomIcon = styled(Icon)`
  width: 14px;
  height: 14px;
`;

const Vehicles = () => {
  const query = useSelector((state) => state["corporate_employees"]["query"]);
  const search_loading = useSelector(
    (state) => state["corporate_employees"]["search_loading"]
  );
  const selectedItem = useSelector(
    (state) => state["corporate_employees"]["selected_vehicle"]
  );
  const vehicles = useSelector(
    (state) => state["corporate_employees"]["vehicles"]
  );

  return (
    <>
      <Form>
        <FormContainer>
          <FormGroup>
            <CustomIcon
              src={require("../../../../assets/icons/car-icon.svg")}
            />
            <Container>
              <PrimaryDropDown
                label="Vehicle Type"
                placeholder="Vehicle Type"
                id="vehicles"
                items={vehicles}
                loading={search_loading}
                selectedItem={selectedItem}
                onChange={(e) => {
                  store.dispatch(addQuery(e.target.value));
                }}
                action={(item) => {
                  store.dispatch(setSelectedVehicle(item));
                }}
                value={selectedItem && selectedItem.region_name}
              />
            </Container>
          </FormGroup>
        </FormContainer>
      </Form>
    </>
  );
};

export default Vehicles;
