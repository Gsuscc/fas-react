import React, { useState, useEffect } from "react";
import axois from "axios";
import Card from "./Card";

export default function Advertisement() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    axois
      .get("http://ip-api.com/json")
      .then((response) => {
        let country = response.data.country;
        return country;
      })
      .then((country) => {
        axois
          .get(`http://localhost:8080/advisor?country=${country}`)
          .then((response) => {
            setOffers(response.data.values);
          });
      });
  }, []);
  return (
    <div>
      {offers.map((offer) => (
        <Card offer={offer} key={offer.country} />
      ))}
    </div>
  );
}
