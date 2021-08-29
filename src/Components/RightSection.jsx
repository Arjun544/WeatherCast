import React, { useContext } from "react";

import { AppContext } from "../App";

const RightSection = ({ dayDetails }) => {
  const { currentLocation } = useContext(AppContext);
  console.log(dayDetails);
  return (
    <div className="flex flex-col w-full bg-customPriColor-light h-screen items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <span className="flex font-semibold text-xs tracking-widest text-gray-300 mt-12 mb-2">
          Your location
        </span>
        <div className="flex items-center justify-center ">
          <svg
            id="Iconly_Bold_Location"
            data-name="Iconly/Bold/Location"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g id="Location" transform="translate(3.5 2)">
              <path
                id="Location-2"
                data-name="Location"
                d="M8.5,20a1.358,1.358,0,0,1-.734-.247,21.513,21.513,0,0,1-5.54-5.141A10.384,10.384,0,0,1,0,8.318,8.168,8.168,0,0,1,2.5,2.434,8.53,8.53,0,0,1,8.493,0,8.423,8.423,0,0,1,17,8.318a10.39,10.39,0,0,1-2.23,6.294,21.92,21.92,0,0,1-5.541,5.141A1.319,1.319,0,0,1,8.5,20ZM8.493,5.777a2.8,2.8,0,0,0-2.8,2.8,2.712,2.712,0,0,0,.821,1.954,2.823,2.823,0,0,0,4.79-1.954,2.824,2.824,0,0,0-2.813-2.8Z"
                fill="#fff"
              />
            </g>
          </svg>

          <span className="flex font-semibold text-sm tracking-widest text-white ml-2">
            {currentLocation.city}, {currentLocation.country_name}
          </span>
        </div>
      </div>

      {/* Todays Weather */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-10">
          <img
            className="h-24 w-24 object-cover mr-4"
            src={dayDetails.day.condition.icon}
            alt=""
          />

          <div className="flex flex-col font-semibold text-sm">
            <div className="flex">
              <span className="flex font-semibold text-7xl text-white">
                {Math.floor(dayDetails.day.avgtemp_c)}
              </span>
              <span className="flex font-semibold text-2xl text-gray-400">
                °C
              </span>
            </div>

            <div className="flex font-semibold tracking-wider text-sm text-white">
              {dayDetails.day.condition.text}
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <span className="text-gray-400 font-semibold tracking-widest text-sm mr-2">
            Sunset {dayDetails.astro.sunset} |
          </span>
          <span className="text-gray-400 font-semibold tracking-widest text-sm">
            Moonset {dayDetails.astro.moonset}
          </span>
        </div>
        <div className="flex mb-6">
          <div className="flex flex-col items-center mr-10">
            <div className="flex h-12 w-12 mb-2 items-center justify-center bg-white rounded-2xl">
              <img className="h-9" src="/wind.png" alt="img" />
            </div>
            <span className="flex text-xs font-semibold text-white tracking-widest">
              {dayDetails.day.maxwind_mph}m/h
            </span>
          </div>
          <div className="flex flex-col items-center mr-10">
            <div className="flex h-12 w-12 mb-2 items-center justify-center bg-customBgColor-light rounded-2xl">
              <img className="h-7" src="/humidity.png" alt="img" />
            </div>
            <span className="flex text-xs font-semibold text-white tracking-widest">
              {dayDetails.day.avghumidity}%
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 mb-2 items-center justify-center bg-customBgColor-light rounded-2xl">
              <img className="h-8" src="/rain.png" alt="" />
            </div>
            <span className="flex text-xs font-semibold text-white tracking-widest">
              {dayDetails.day.daily_chance_of_rain}%
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-20"></div>
    </div>
  );
};

export default RightSection;
