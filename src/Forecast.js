import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ShowWeather from "./ShowWeather";
import NextDaysForecast from "./NextDaysForecast";

export default function Forecast(props) {
  const [weatherDetails, setWeatherDetails] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function getResponse(response) {
    console.log(response);
    setWeatherDetails({
      ready: true,
      city: response.data.name,
      day: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      realFeel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  function searchForCity() {
    let apiKey = "a367566821d5256a1c920a360eab8e9e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchForCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherDetails.ready) {
    return (
      <div className="Forecast">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type your city"
                className="searchArea form-control"
                onChange={updateCity}
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
        <ShowWeather info={weatherDetails} />
        <NextDaysForecast coordinates={weatherDetails.coordinates} />
        <footer>
          App created by Klaudia Wawrzynczyk. Please find the code source{" "}
          <a
            href="https://github.com/klaudiawuu/weather-app-react"
            rel="noopener"
            className="source"
          >
            here
          </a>
        </footer>
      </div>
    );
  } else {
    searchForCity();
    return "Awaiting response...";
  }
}
