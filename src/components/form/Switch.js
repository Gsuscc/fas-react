import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const CustomSwitch = withStyles({
  root: {
    width: 100,
    height: 25,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(75px)",
    },
    color: purple[300],
    "&$checked": {
      color: purple[500],
    },
    "&$checked + $track": {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function FormControlLabelPosition() {
  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    setChecked(!checked);
  };
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          className="switch"
          value="top"
          control={<CustomSwitch checked={checked} onChange={handleChange} />}
          label="Return"
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
