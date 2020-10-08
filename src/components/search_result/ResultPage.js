import React, { useContext } from "react";
import Filter from "./Filter";
import { GeneralState } from "../../context/SearchGeneral";
import ResultCard from "./ResultCard";
import "./ResultPage.css";
export default function ResultPage() {
  const { result } = useContext(GeneralState);
  const [searchResult, setSearchResult] = result;

  return (
    <div className="result-container">
      {searchResult.size <= 0 ? (
        <div>NO RESULT</div>
      ) : (
        searchResult.map((flight) => {
          return <ResultCard flight={flight} />;
        })
      )}
    </div>
  );
}
