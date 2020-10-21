import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

export default function TimeFilter(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const time = props.time
  const setTime = props.setTime

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
