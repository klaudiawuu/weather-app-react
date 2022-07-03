import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });
  function getResponse(response) {
    console.log(response);
    setWeatherDetails({
      ready: true,
      city: response.data.name,
      day: "Friday 10:00",
      description: response.data.weather[0].description,
      icon: "https://i.ibb.co/mCRPjrR/sunbehindcloud.png",
      temperature: response.data.main.temp,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherDetails.ready) {
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
        <h1>{weatherDetails.city}</h1>
        <ul className="actualTime">
          <li>{weatherDetails.day}</li>
          <li className="text-capitalize">{weatherDetails.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherDetails.icon}
              alt="Partly cloudy"
              className="mainIcon float-left"
            ></img>
            <strong className="currentTemp">
              {Math.round(weatherDetails.temperature)}
            </strong>
            <span className="units">°C|°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Real Feel: {Math.round(weatherDetails.realFeel)}°C</li>
              <li>Humidity: {weatherDetails.humidity}%</li>
              <li>Wind: {Math.round(weatherDetails.wind)} km/h</li>
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
  } else {
    let apiKey = "a367566821d5256a1c920a360eab8e9e";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getResponse);

    return "Awaiting response...";
  }
}
