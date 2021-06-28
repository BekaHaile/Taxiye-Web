import React from "react";
import { Form, Icon, FormGroup } from "../../../../tab-forms/inputs";
import { FormContainer } from "../../../../tab-forms/tab-titles";
import { PrimarySearchInput } from "./inputs/input";
import store from "../../../../../redux/store";
import {
  addQuery,
  setSelectedEmployee,
} from "../../../../../redux/actions/corporate/employees";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

const Container = styled("div")`
  width: 100%;
`;

const SearchUser = () => {
  const query = useSelector((state) => state["corporate_employees"]["query"]);
  const search_loading = useSelector(
    (state) => state["corporate_employees"]["search_loading"]
  );
  const selectedItem = useSelector(
    (state) => state["corporate_employees"]["selected_employee"]
  );
  const employees = useSelector(
    (state) => state["corporate_employees"]["employees"]
  );

  const [show, setShow] = useState(false);
  return (
    <>
      <Form>
        <FormContainer>
          <FormGroup>
            <Icon src={require("../../../../../assets/icons/user.svg")} />
            <Container>
              <PrimarySearchInput
                label="Search employee"
                placeholder="Enter employee name"
                id="employee"
                items={employees}
                loading={search_loading}
                selectedItem={selectedItem}
                show={show}
                onBlur={() => {
                  setShow(false);
                }}
                onChange={(e) => {
                  setShow(true);
                  store.dispatch(addQuery(e.target.value));
                }}
                action={(item) => {
                  store.dispatch(setSelectedEmployee(item));
                }}
                value={query}
              />
            </Container>
          </FormGroup>
        </FormContainer>
      </Form>
    </>
  );
};

export default SearchUser;
