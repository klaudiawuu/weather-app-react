import React from "react";
import CorrectDateFormat from "./CorrectDateFormat";
import "./Forecast.css";
import Units from "./Units";

export default function ShowWeather(props) {
  return (
    <div className="ShowWeather">
      <h1>{props.info.city}</h1>
      <ul className="actualTime">
        <li>
          <CorrectDateFormat day={props.info.day} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={props.info.icon}
            alt="Partly cloudy"
            className="mainIcon float-left"
          ></img>
          <Units celcius={props.info.temperature}/>
          
        </div>
        <div className="col-6 additionalInfo">
          <ul>
            <li>Real Feel: {Math.round(props.info.realFeel)}°C</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
      <footer>
        App created by Klaudia Wawrzynczyk. Please find the code source{" "}
        <a
          href="https://github.com/klaudiawuu/weather-app-react"
          target="_blank"
          rel="noopener"
          class="source"
        >
          here
        </a>
      </footer>
    </div>
  );
}
