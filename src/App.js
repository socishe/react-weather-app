import React, { Component } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherCard />
      </div>
    );
  }
}

export default App;
