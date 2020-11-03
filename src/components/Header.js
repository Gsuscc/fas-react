import Menu from "./Menu";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  const submitHandler = () => {
    history.push("/");
  };
  return (
    <ul className="topnav">
      <li>
        <div className="site-logo link" onClick={submitHandler}>
          <img src="/plane.png" alt="plane" className="plane"></img>
        </div>
      </li>
      <li className="page-title link">
        <div className="page-title-text" onClick={submitHandler}>
          Fake Airline Services
        </div>
      </li>
      <li className="right link">
        <Menu />
      </li>
    </ul>
  );
}
