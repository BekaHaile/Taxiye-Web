import React from 'react';
import styled from "styled-components";
import { Inputs, Form, InlineForm, InputSeparator, Button } from "../../hero/inputs";


const ChildrenContainer = styled("div")`
border-bottom: 5px solid #EFF2F5;
padding:5px 20px;
`;

const Journey = () => {


    return (
        <>
            <ChildrenContainer>
            <Inputs
            label="Journey?"
            placeholder="Round Trip"
            id="location"
            icon={require("../../../assets/icons/journey.svg")}
          />
            <InlineForm>
            <Inputs
              label="Return?"
              placeholder="Today"
              id="date"
              icon={require("../../../assets/icons/user/clock.svg")}
            />
            <InputSeparator>
              <Inputs label="Time?" placeholder="06:45 AM" id="time" />
            </InputSeparator>
          </InlineForm>
  
            </ChildrenContainer>

        </>
    );
}

export default Journey;