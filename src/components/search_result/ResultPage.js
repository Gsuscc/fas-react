import React, { useContext } from "react";
import Filter from "./Filter";
import { GeneralState } from "../../context/SearchGeneral";
import ResultCard from "./ResultCard";
import "./ResultPage.css";
export default function ResultPage() {
  const { result } = useContext(GeneralState);
  const [searchResult, setSearchResult] = result;

  return (
    <div className="result-page">
      <Filter />
      <div className="result-container">
        {searchResult.length <= 0 ? (
          <div className="result-no-result">NO RESULT</div>
        ) : (
          searchResult.map((flight) => {
            return <ResultCard flight={flight} />;
          })
        )}
      </div>
      <div></div>
    </div>
  );
}
