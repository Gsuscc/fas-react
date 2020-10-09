import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { GeneralState } from "../../context/SearchGeneral";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const fromValue=props.fromValue;
  const setFromValue=props.setFromValue 
  const toValue=props.toValue
  const setToValue=props.setToValue
//  const [value, setValue] = React.useState([fromValue, toValue]);

  const handleChange = (event, newValue) => {
    const [from, to] = newValue;
    setFromValue(from);
    setToValue(to)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" variant="caption" gutterBottom>
        Price range
      </Typography>
      <Slider
        max={15000}
        value={[fromValue, toValue]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
