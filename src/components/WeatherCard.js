import React, { useState, useEffect, useCallback } from "react";
import "./WeatherCard.css";
import WeatherList from "./WeatherList";
import SearchForm from "./SearchForm";
import axios from "axios";

import data from "../JsonData";
const API_KEY = "986df41cb8f0c0e4760d17130fc344d7";

const WeatherCard = () => {
  const [state, setState] = useState({
    city: "Cape Town",
    tempUnits: "celsius",
    tempSymbol: "°C",
  });

  const [currentWeather, setCurrentWeather] = useState({
    icon: "",
    main: "",
    mainTemp: 0,
    temp: {
      min: 0,
      max: 0,
    },
  });

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${state.city}&units=metric&appid=${API_KEY}`;

    axios
      .get(URL)
      .then((response) => {
        const { data } = response;
        setCurrentWeather({
          icon: data.weather[0].icon,
          main: data.weather[0].main,
          mainTemp: Math.round(data.main.temp),
          temp: {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
          },
        });
      })
      .catch((error) => {});
  }, [state.city]);

  const loopCall = useCallback(() => {
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${state.city}&units=metric&appid=${API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        const { data } = response;

        if (data.cod === "200") {
          const arr = data.list.filter((e) => {
            const val = e.dt_txt.split(" ")[1];
            return val === "00:00:00" || val === "12:00:00";
          });

          // Sort data according matching days

          const matching = [];

          arr.forEach((value) => {
            // take date
            const date = value.dt_txt.split(" ")[0];

            if (matching[date]) {
              matching[date].push(value);
            } else {
              matching[date] = [value];
            }
          });

          // convert to proper array
          const toArray = Object.entries(matching);

          const finalData = [];

          toArray.forEach((value) => {
            const itemData = {};

            value[1].forEach((itemValue) => {
              const time = itemValue.dt_txt.split(" ")[1];

              const dataCons = {
                temp: Math.round(itemValue.main.temp),
                weather: itemValue.weather[0],
              };

              if (time === "12:00:00") {
                itemData["high"] = dataCons;
              } else {
                itemData["low"] = dataCons;
              }
            });

            finalData.push({
              date: value[0],
              data: itemData,
            });
          });

          setWeather(finalData);
        } else {
        }
      })
      .catch((error) => {});
  }, [state.city]);

  useEffect(() => {
    loopCall();
  }, [loopCall]);

  const onSearchSubmit = (city) => {
    setState({ city });
  };

  const toCelsius = (fahrenheit) => {
    return Math.round(((fahrenheit - 32) * 5) / 9);
  };

  const toFahrenheit = (celsius) => {
    return Math.round((celsius * 9) / 5 + 32);
  };

  const converter = (temp, type) => {
    if (type !== "celsius") {
      return toFahrenheit(temp);
    }

    return toCelsius(temp);
  };

  const onValueChange = (e) => {
    const value = e.target.value;
    let symbol = "°C";

    if (value !== "celsius") {
      symbol = "°F";
    }

    const calCurrent = {
      icon: currentWeather.icon,
      main: currentWeather.main,
      mainTemp: converter(currentWeather.mainTemp, value),
      temp: {
        min: converter(currentWeather.temp.min, value),
        max: converter(currentWeather.temp.max, value),
      },
    };

    setCurrentWeather(calCurrent);

    const changeWeather = weather.map((value) => {
      const val = value;

      if (val.data.high !== undefined) {
        val.data.high.temp = converter(val.data.high.temp, value);
      }

      if (val.data.low !== undefined) {
        val.data.low.temp = converter(val.data.low.temp, value);
      }

      return val;
    });

    setWeather(changeWeather);

    setState({ ...state, tempSymbol: symbol, tempUnits: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state.tempUnits);
  };

  return (
    <div className="card">
      <SearchForm onSubmit={onSearchSubmit} />
      <h1>Weekly weather forecast in {state.city}</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="celsius">
          <input
            onChange={onValueChange}
            type="radio"
            id="celsius"
            checked={state.tempUnits === "celsius"}
            value="celsius"
          />
          Celsius
        </label>
        <label htmlFor="fahrenheit">
          <input
            onChange={onValueChange}
            type="radio"
            id="fahrenheit"
            checked={state.tempUnits === "fahrenheit"}
            value="fahrenheit"
          />
          Fahrenheit
        </label>
      </form>

      <div className="currentWeather">
        <div className="main-info">
          <div className="temp-measurement">{currentWeather.mainTemp}</div>
          <div className="temp-unit">
            {state.tempUnits === "celsius" ? "°C" : "°F"}
          </div>
        </div>

        <div className="sub-info">
          <div className="sub-info-title">Current Weather Today</div>

          <div className="sub-info-text">{currentWeather.main}</div>

          <div className="sub-info-text">
            <span className="max-temp">
              <i className="mdi mdi-arrow-up" />
              {`${currentWeather.temp.max} ${state.tempSymbol}`}
            </span>
            <span className="min-temp">
              <i className="mdi mdi-arrow-down" />
              {`${currentWeather.temp.min} ${state.tempSymbol}`}
            </span>
          </div>
        </div>
      </div>

      <WeatherList weather={weather} units={state.tempSymbol} />
    </div>
  );
};

export default WeatherCard;
