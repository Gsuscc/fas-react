import React, { useContext } from "react";
import Filter from "./Filter";
import { GeneralState } from "../../context/SearchGeneral";
import ResultCard from "./ResultCard";
import "./ResultPage.css";
export default function ResultPage() {
  const { result, filter } = useContext(GeneralState);
  const [searchResult, setSearchResult] = result;
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
    <div className="result-page">
      <Filter />
      <div className="result-container">
        {searchResult.length <= 0 ? (
          <div className="result-no-result">NO RESULT</div>
        ) : (
          searchResult
            .sort((a, b) =>
              a.ticket.touristPrice +
                (a.returnTicket ? a.returnTicket.touristPrice : 0) >
              b.ticket.touristPrice +
                (b.returnTicket ? b.returnTicket.touristPrice : 0)
                ? 1
                : b.ticket.touristPrice +
                    (b.returnTicket ? b.returnTicket.touristPrice : 0) >
                  a.ticket.touristPrice +
                    (a.returnTicket ? a.returnTicket.touristPrice : 0)
                ? -1
                : 0
            )
            .map((flight) => {
              let price = flight.ticket.touristPrice +
              (flight.returnTicket ? flight.returnTicket.touristPrice : 0)
              if (price >= priceFrom && price <= priceTo) {
                return <ResultCard flight={flight} />;
              }
              return null;
            })
        )}
      </div>
      <div></div>
    </div>
  );
}
