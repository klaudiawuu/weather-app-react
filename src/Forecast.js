import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Your city"
              className="searchArea form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary"
            ></input>
          </div>
        </div>
      </form>
      <h1>Varsovia</h1>
      <ul className="actualTime">
        <li>Friday 10:00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://i.ibb.co/mCRPjrR/sunbehindcloud.png"
            alt="Partly cloudy"
            className="mainIcon float-left"
          ></img>
          <strong className="currentTemp">25</strong>
          <span className="units">°C|°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Real Feel: 27°C</li>
            <li>Humidity: 87%</li>
            <li>Wind: 7 km/h</li>
          </ul>
        </div>
      </div>
      <footer>
        App created by Klaudia Wawrzynczyk. Please find the code source{" "}
        <a
          href="https://github.com/klaudiawuu/weather-app-react"
          target="_blank"
          rel="noopener"
        >
          here
        </a>
      </footer>
    </div>
  );
}
