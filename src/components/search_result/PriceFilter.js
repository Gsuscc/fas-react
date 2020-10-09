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

export default function RangeSlider() {
  const classes = useStyles();
  const { result } = useContext(GeneralState);
  const [searchResult, setSearchResult] = result;
  let defaultPriceLow = 20;
  let defaultPriceMax = 500;
  if (searchResult.length > 0) {
    defaultPriceLow =
      searchResult[0].ticket.touristPrice +
      (searchResult[0].returnTicket
        ? searchResult[0].returnTicket.touristPrice
        : 0);

    defaultPriceMax =
      searchResult[searchResult.length - 1].ticket.touristPrice +
      (searchResult[searchResult.length - 1].returnTicket
        ? searchResult[searchResult.length - 1].returnTicket.touristPrice
        : 0);
  }
  const [value, setValue] = React.useState([defaultPriceLow, defaultPriceMax]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue[0]);
    console.log(newValue[1]);
    let originalResult = searchResult;
    let newResult = searchResult.filter((obj) => {
      console.log(obj);
      let price =
        obj.ticket.touristPrice +
        (obj.returnTicket ? obj.returnTicket.touristPrice : 0);
      return price >= newValue[0] && price <= newValue[1];
    });
    setSearchResult(newResult);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" variant="caption" gutterBottom>
        Price range
      </Typography>
      <Slider
        max={defaultPriceMax}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
