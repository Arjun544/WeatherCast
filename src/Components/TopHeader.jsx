import React, { useContext } from "react";
import moment from "moment";
import { AppContext } from "../App";

const TopHeader = () => {
  const { currentLocation, isBigScreen, weather } = useContext(AppContext);

  return !isBigScreen ? (
    <div className="flex items-center justify-between mt-6 mx-6 ">
      <div className="flex items-center">
        <img className="h-10 mr-3" src="/logo.png" alt="logo" />
        <span className="font-bold text-customPriColor-light">WeatherCast</span>
      </div>

      <div className="flex items-center">
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
              fill="#0075ff"
            />
          </g>
        </svg>

        <span className="flex font-semibold text-sm">
          {currentLocation.city}, {currentLocation.country_name}
        </span>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between mt-10 mx-12 mb-6">
      <div className="flex items-center">
        <img className="h-10 mr-3" src="/logo.png" alt="logo" />
        <span className="font-bold text-customPriColor-light">WeatherCast</span>
      </div>
      <div className="flex items-center ">
        <span className="font-semibold text-xs tracking-wide text-gray-400 ml-2">
          Last updated
        </span>
        <span className="font-semibold text-xs tracking-wider text-black ml-2">
          {moment(weather.current.last_updated).format("D MMM YYYY")}
          {", "}
          {moment(weather.current.last_updated).format("h:mm")}
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
