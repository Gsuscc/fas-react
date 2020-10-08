import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
    textAlign: "center",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Passengers(props) {
  const classes = useStyles();
  const person = props.value;
  const setPerson = props.setValue;

  const handleChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <div>
      <img src="/adult.png" alt="passenger" id="adult-icon"></img>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={person}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
