import React from "react";
import "./App.css";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App container">
      <Forecast defaultCity="Lisbon" />
    </div>
  );
}
