import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import "./switcher.css";

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 105,
    height: 26,
    padding: 0,
    margin: theme.spacing(3),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(80px)",
      color: "white",
      "& + $track": {
        backgroundColor: "#3e004a",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#ace391",
      border: "1px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: "#ace391",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

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
          label={checked ? "Return" : "One-Way"}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
