import React, { FunctionComponent } from "react";
import styled from "styled-components";
type InputProps = {
    id: string;
    label?: string;
    icon?: string;
    placeholder: string;
  };
  
const DatePicker : FunctionComponent<InputProps> = ({
    id,
    label,
    icon,
    placeholder,
  }) => {
    return (
      <input type="date"/>
    );
  };

  export {DatePicker}