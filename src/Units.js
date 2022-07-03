import React, { useState } from "react";
import "./Forecast.css";

export default function Units(props) {
  const [unit, setUnit] = useState("celcius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToCelcius(event) {
    event.preventDefault();
    setUnit("celcius")
  }

  if (unit === "celcius") {
    return (
      <span>
        <strong className="currentTemp">{Math.round(props.celcius)}</strong>
        <span className="units">
          °C|
          <a href="/" className="fahrenheit" onClick={changeToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemp = (props.celcius *9)/5 + 32;
    return (
      <span>
        <strong className="currentTemp">{Math.round(fahrenheitTemp)}</strong>
        <span className="units">
          <a href="/" className="celc" onClick={changeToCelcius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
