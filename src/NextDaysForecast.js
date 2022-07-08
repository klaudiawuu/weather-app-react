import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function NextDaysForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "a367566821d5256a1c920a360eab8e9e";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="nextDaysForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li className="nextDay">Thursday</li>
            <li>
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Next day icon"
                className="nextDayIcon"
              ></img>
            </li>
            <li>
              <span className="nextDayTempMax">21° </span>
              <span className="nextDayTempMin">20°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
