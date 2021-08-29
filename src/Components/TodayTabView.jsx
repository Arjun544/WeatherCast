import React, { useContext } from "react";
import { AppContext } from "../App";
import TodayHighlights from "./TodayHighlights";
import moment from "moment";

const TodayTabView = () => {
  const { isBigScreen, weather } = useContext(AppContext);

  return (
    <div className="flex flex-col w-full bg-white rounded-3xl p-5">
      {!isBigScreen && (
        <div className="flex flex-col items-center justify-center bg-white rounded-3xl">
          {/* Todays Weather */}
          <div className="flex items-center mb-10">
            <img
              className="h-24 w-24 object-cover mr-4"
              src={weather.current.condition.icon}
              alt=""
            />

            <div className="flex flex-col font-semibold text-sm">
              <div className="flex font-semibold text-sm">
                {weather.current.temp_c} °C
              </div>
              <div className="flex font-semibold text-sm">
                {weather.current.condition.text}
              </div>
            </div>
          </div>

          <div className="flex mb-6">
            <div className="flex flex-col items-center mr-10">
              <div className="flex h-10 w-10 mb-2 items-center justify-center bg-customBgColor-light rounded-xl">
                <img className="h-6" src="/wind.png" alt="img" />
              </div>
              <span className="flex text-xs font-semibold text-gray-400 tracking-wider">
                {weather.current.wind_mph}m/h
              </span>
            </div>
            <div className="flex flex-col items-center mr-10">
              <div className="flex h-10 w-10 mb-2 items-center justify-center bg-customBgColor-light rounded-xl">
                <img className="h-5" src="/humidity.png" alt="img" />
              </div>
              <span className="flex text-xs font-semibold text-gray-400 tracking-wider">
                {weather.current.humidity}%
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 mb-2 items-center justify-center bg-customBgColor-light rounded-xl">
                <img className="h-6" src="/cloud.png" alt="img" />
              </div>
              <span className="flex text-xs font-semibold text-gray-400 tracking-wider">
                {weather.current.cloud}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Today's HighLights */}
      <div className="flex ">
        <span className="font-medium">Today's Highlights</span>
      </div>
      <TodayHighlights />

      <div className="flex mb-4 mt-14">
        <span className="font-medium">Hourly</span>
      </div>
      <div className="flex overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-customPriColor-light scrollbar-track-grey-light">
        {weather.forecast.forecastday[0].hour.map((item) => (
          <div className="flex flex-col h-32 py-1 px-8 mr-4 mb-6 bg-customBgColor-light rounded-3xl justify-around hover:shadow-md">
            <span className="font-semibold text-sm">{item.temp_c}</span>
            <img className="h-14 w-14" src={item.condition.icon} alt="" />
            <span className="font-medium tracking-widest text-xs text-gray-400">
              {moment(item.time).format("hh:mm")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayTabView;
