import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

const SearchBar = () => {
  const {
    isBigScreen,
    currentLocation,
    setWeather,
    searchresults,
    setSearchResults,
    showClearButton,
    setShowClearButton,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  function handleSubmitInputChange(e) {
    setInputValue(e.target.value);
    const getWeather = async () => {
      const apiKey = "3f7b75d863ad43999b1105325212708";
      setShowSearch(false);
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${e.target.value}&days=7&aqi=yes&alerts=yes`
        );
        const myWeather = response.data;
        setSearchResults(myWeather);
        setShowSearch(true);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getWeather();
  }

  function onResultClick(e) {
    setWeather(searchresults);
    setInputValue(
      `${searchresults.location.name} ${searchresults.location.region} ${searchresults.location.country}`
    );
    setShowClearButton(true);
    setShowSearch(false);
  }

  function handleClear(e) {
    const getWeather = async () => {
      const apiKey = "3f7b75d863ad43999b1105325212708";
      setShowSearch(false);
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentLocation.city}&days=7&aqi=yes&alerts=yes`
        );
        const myWeather = response.data;
        setWeather(myWeather);

        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getWeather();
    setInputValue("");
    setShowClearButton(false);
  }

  return (
    <div
      className={`flex ${
        isBigScreen ? "w-1/2" : "w-11/12"
      } h-16 mx-6 m-6 mr-20 justify-center relative`}
    >
      <input
        type="text"
        placeholder="Search city..."
        value={inputValue}
        onChange={handleSubmitInputChange}
        className={
          isBigScreen
            ? "px-6 w-4/5 placeholder-blueGray-300 shadow-sm font-medium text-blueGray-600 bg-grey-light rounded-tl-2xl rounded-bl-2xl border-0 outline-none focus:outline-none focus:ring-1"
            : "px-6 py-4 w-full placeholder-blueGray-300 shadow-sm font-medium text-blueGray-600 bg-grey-light rounded-tl-2xl rounded-bl-2xl border-0 outline-none focus:outline-none focus:ring-1 "
        }
      />
      <button className="flex-none px-8 py-3 mr-30 text-sm rounded-tr-2xl rounded-br-2xl font-medium tracking-widest text-white transition-colors duration-200 transform bg-customPriColor-light hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
        Search
      </button>
      {showClearButton && (
        <button
          onClick={handleClear}
          className="flex-none px-4 py-3 ml-5 text-sm  rounded-2xl font-medium tracking-wider text-white transition-colors duration-200 transform bg-red-400 hover:bg-red-300 focus:bg-red-300 focus:ring"
        >
          Clear
        </button>
      )}
      {showSearch && (
        <div className="flex w-4/5 top-16 mt-2 left-4 px-4 py-4 rounded-br-2xl rounded-bl-2xl  bg-indigo-50 shadow-sm z-50 absolute">
          <div
            onClick={onResultClick}
            className="flex  items-center px-2 py-2 rounded-xl hover:bg-white cursor-pointer"
          >
            <span className="font-medium mr-1">
              {searchresults.location.name},
            </span>
            <span className="font-medium mr-1">
              {searchresults.location.region},
            </span>

            <span className="font-medium ">
              {searchresults.location.country}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
