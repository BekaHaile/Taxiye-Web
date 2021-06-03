import React, { FunctionComponent } from "react";
import styled from "styled-components";
type InputProps = {
  id: string;
  label?: string;
  icon?: string;
  placeholder: string;
};

import 'date-fns';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export function DatePicker({selectedDate, id, placeholder,action }) {
  const handleDateChange = (date) => {
    action(date);
  };
  

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id={id}
        className="pickers"
        placeholder={placeholder}
        disableToolbar
        minDate={new Date()}
        variant="inline"
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export function TimePicker({selectedTime, id, placeholder, action}) {

  const handleDateChange = (time) => {
    action(time.target.value);
  };

  return (
    <TextField
      id={id}
      className="pickers"
      placeholder={placeholder}
      value={selectedTime}
      type="time"
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: false,
      }}
      inputProps={{
        step: 300,
      }}
    />
  );
}
