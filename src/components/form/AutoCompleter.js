import React, { useState, useEffect, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import flightFetch from "../../dataHandler/dataHandler";
import ErrorModal from "../ui/ErrorModal";

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function Autocompleter(props) {
  const classes = useStyles();
  const [airports, setAirports] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const value = props.value;
  const setValue = props.setValue;
  const componentID = props.inputId;
  const [loading, setLoading] = useState(false);

  const fillOptions = useCallback((data) => {
    setAirports(data.values);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.length >= 2) {
        const queryUrl = `http://localhost:8080/airport/query?substring=${text}`;
        flightFetch(queryUrl, fillOptions, (error) => setError(error));
        setLoading(true);
      } else {
        setAirports([]);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [text, fillOptions]);

  const clear = useCallback(() => {
    setError(null);
  }, []);

  console.log(loading);

  return (
    <React.Fragment>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Autocomplete
        id={componentID}
        style={{ width: 300 }}
        options={airports}
        classes={{
          option: classes.option,
        }}
        autoSelect={true}
        noOptionsText={text.length > 2 ? "Not found..." : "Start typing..."}
        loading={loading}
        value={value}
        onInputChange={(event, value) => setText(value)}
        onChange={(event, value) => setValue(value)}
        inputValue={text}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>
            <span>{countryToFlag(option.countryCode)}</span>
            {option.label}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose an Airport"
            variant="standard"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </React.Fragment>
  );
}
