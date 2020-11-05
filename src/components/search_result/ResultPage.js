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
          <React.Fragment>
            <div class="bounce">
              <img className="downArrow" width="80" height="80" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
            </div>
            <div className="book-container">No result this time. Tweak your search parameters above.</div>
          </React.Fragment>
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
              if (price >= priceFrom && price <= priceTo && timeFrom <= new Date(flight.ticket.departure) && timeTo >= new Date(flight.ticket.departure))  {
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
