import React from "react";
import Form from "./form/Form";
import AdvertiseSwipe from "./specialOffer/AdvertiseSwipe";
import "../App.css";
import ImportantInfoBanner from "./ImportantInfoBanner";

export default function Main() {
  return (
    <div>
      <ImportantInfoBanner />
      <Form />
      <div className="compare-context">Compare flights!</div>
      <div className="sub-compare-context">Flight comparison from 20+ cities, 10+ airlines and over 100.000 flights</div>
      <AdvertiseSwipe />
    </div>
  );
}
