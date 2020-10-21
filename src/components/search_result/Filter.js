import React, { useContext, useCallback, useState } from "react";
import PriceFilter from "./PriceFilter";
import AutoCompleter from "../form/AutoCompleter";
import DatePicker from "../form/DatePicker";
import Switch from "../form/Switch";
import Passengers from "../form/Passengers";
import { GeneralState } from "../../context/SearchGeneral";
import TimeFilter from "./TimeFilter";
import "./Filter.css";

export default function Filter(props) {
  const [ isFiltersVisible, setIsFiltersVisible ] = useState(false);
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

  const toggleFilters = useCallback(
    () => {
      setIsFiltersVisible(!isFiltersVisible)
    },
    [isFiltersVisible],
  )
  return (
    <div className="filter-container">
      
      {isFiltersVisible && 
        <div className="filters">
          <div className="column">
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
          </div>
          <div className="column">
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
          </div>
          <div className="column">
            <TimeFilter  time={timeFrom} setTime={setTimeFrom}/>
            <TimeFilter time={timeTo} setTime={setTimeTo} />
          </div>
          <div className="column">
            <PriceFilter fromValue={priceFrom} setFromValue={setPriceFrom} toValue={priceTo} setToValue={setPriceTo}/>
            <Passengers value={person} setValue={setPerson} />
          </div>
          <div className="inline">
            <Switch value={isReturn} setValue={setIsReturn} />
          </div>
        </div>
      }
      <div onClick={toggleFilters}>
        <img id="filter-icon" alt="toggleFilterBar" src="https://cdn.discordapp.com/attachments/757838866047696906/768444610522513408/toppng.com-file-svg-filter-icon-980x981.png"></img>
      </div>
    </div>
  );
}
