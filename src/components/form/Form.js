import React, { useContext } from "react";
import DatePicker from "./DatePicker";
import "./Form.css";
import Passengers from "./Passengers";
import Switch from "./Switch";
import AutoCompleter from "./AutoCompleter";
import Button from "@material-ui/core/Button";
import { SearchState } from "../../context/SearchContext";

export default function Form() {
  const { result, general, filter } = useContext(SearchState);
  const [
    fromCode,
    setFromCode,
    toCode,
    setToCode,
    tripDate,
    setTripDate,
    returnDate,
    setReturnDate,
    person,
    setPerson,
  ] = general;

  return (
    <div className="search-area">
      <AutoCompleter
        inputId="airportOne"
        value={fromCode}
        setValue={setFromCode}
      />
      <AutoCompleter inputId="airportTwo" value={toCode} setValue={setToCode} />
      <DatePicker
        label="Departure Date"
        value={tripDate}
        setValue={setTripDate}
      />
      <DatePicker
        label="Arrival Date"
        value={returnDate}
        setValue={setReturnDate}
      />
      <Passengers value={person} setValue={setPerson} />
      <Switch />
      <Button className="search-button" variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}
