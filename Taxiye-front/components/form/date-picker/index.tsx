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

export function DatePicker({id, placeholder,action }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    action(date);
  };
  

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <KeyboardDatePicker
        id={id}
        className="pickers"
        placeholder={placeholder}
        disableToolbar
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

export function TimePicker({id, placeholder, action}) {
  // The first commit of Material-UI
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleDateChange = (time) => {
    setSelectedTime(time);
    action(time);
  };

  return (
    <TextField
      id={id}
      className="pickers"
      placeholder={placeholder}
      defaultValue="06:30"
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
