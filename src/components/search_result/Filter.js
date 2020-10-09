import React, { useContext } from "react";
import PriceFilter from "./PriceFilter";
import AutoCompleter from "../form/AutoCompleter";
import DatePicker from "../form/DatePicker";
import Switch from "../form/Switch";
import Passengers from "../form/Passengers";
import { GeneralState } from "../../context/SearchGeneral";
import TimeFilter from "./TimeFilter";
import "./Filter.css";

export default function Filter(props) {
  const { general, filter } = useContext(GeneralState);
  const [
    fromAirport,
    setFromAirport,
    toAirport,
    setToAirport,
    tripDate,
    setTripDate,
    returnDate,
    setReturnDate,
    person,
    setPerson,
    isReturn,
    setIsReturn,
  ] = general;
  const [
    timeFrom,
    setTimeFrom,
    timeTo,
    setTimeTo,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    airLineCode,
    setAirLineCode,
  ] = filter;
  return (
    <div className="filter-container">
      <AutoCompleter
        inputId="airportOne"
        label="From (city or airport)"
        value={fromAirport}
        setValue={setFromAirport}
      />
      <AutoCompleter
        inputId="airportTwo"
        label="To (city or airport)"
        value={toAirport}
        setValue={setToAirport}
      />
      <DatePicker
        label="Departure date"
        value={tripDate}
        setValue={setTripDate}
        disabled={false}
      />
      <DatePicker
        label="Return date"
        value={returnDate}
        setValue={setReturnDate}
        disabled={!isReturn}
      />
      <TimeFilter />
      <TimeFilter />
      <PriceFilter fromValue={priceFrom} setFromValue={setPriceFrom} toValue={priceTo} setToValue={setPriceTo}/>
      <div className="inline">
        <Passengers value={person} setValue={setPerson} />
        <Switch value={isReturn} setValue={setIsReturn} />
      </div>

    </div>
  );
}
