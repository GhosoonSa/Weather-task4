import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import LoadingSpinner from "../component/LoadingSpinner";

const Guest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [light, setLight] = useState(true);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "65a393233277cd209308549b1cb9d360";

  const toggleLight = () => {
    setLight(!light);
  };

  console.log("before handle");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    console.log("befor api");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ar`
      );
      console.log("response ", response);
      setWeatherData(response.data);
      console.log("weatherData", weatherData);
    } catch (err) {
      setError(err.response?.data?.message || "City not found");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div
          className={`mt-8 p-4 rounded-lg ${
            light ? "bg-red-500" : "bg-red-100"
          } text-center`}
        >
          <p className="text-xl">{error}</p>
        </div>
      )}

      <div className={`${light ? "bg-amber-200" : "bg-black"} grid h-screen`}>
        <div className="h-auto  pr-6 pl-6 pb-6 pt-5 max-w-96 box-content m-auto grid grid-rows-2">
          <button
            onClick={toggleLight}
            className={`p-2 m-2 bg-white rounded-2xl ${
              light ? "text-amber-500" : "text-black"
            } h-16  row-span-1 `}
          >
            {light ? "turn off" : "turn on"}
          </button>
          <form
            onSubmit={handleSubmit}
            className="mb-8 row-span-1 grid grid-cols-3"
          >
            <input
              type="search"
              name="sForC"
              placeholder="  Search cities.."
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className=" col-span-2 border border-gray-500 rounded-sm bg-white text-black h-10 mt-1 ml-2"
            />
            <button
              type="submit"
              className={`px-6 py-2 rounded-l-lg ${
                light ? "text-amber-500" : "text-black"
              } bg-white font-semibold col-span-1 ml-1 w-28`}
            >
              search
            </button>
          </form>

          {loading && <LoadingSpinner />}

          {weatherData != null && (
            <div
              className={`${light ? "text-black" : "text-white"} ml-10 mt-5`}
            >
              <h1>Weather Info</h1>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}`}
                alt="Weather icon"
                className="mx-24 my-4 w-24 h-24"
              />
              <p className="mx-16 my-3 text-xl">name: {weatherData.name}</p>
              <p className="mx-16 my-3 text-xl">
                description: {weatherData.weather[0].description}
              </p>
              <p className="mx-16 my-3 text-xl">
                temperature: {weatherData.main.temp}
              </p>
              <p className="mx-16 my-3 text-xl">
                windSpeed: {weatherData.wind.speed}
              </p>
              <p className="mx-16 my-3 text-xl">
                humidity: {weatherData.main.humidity}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Guest;
