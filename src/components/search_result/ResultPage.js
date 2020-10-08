import React, { useContext } from "react";
import Filter from "./Filter";
import { GeneralState } from "../../context/SearchGeneral";
import ResultCard from "./ResultCard";
export default function ResultPage() {
  const { result } = useContext(GeneralState);
  const [searchResult, setSearchResult] = result;

  return (
    <div className="result-container">
      {searchResult.map((flight) => {
        return <ResultCard flight={flight} />;
      })}
    </div>
  );
}
