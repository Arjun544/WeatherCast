import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import SelectedDayHighlights from "./SelectedDayHighlights";
import moment from "moment";

const WeeklyTabView = () => {
  const { isBigScreen, weather } = useContext(AppContext);
  const [selectedDay, setSelectedDay] = useState(Date.now);

  useEffect(() => {}, [selectedDay]);

  return (
    <div className="flex flex-col w-full bg-white rounded-3xl p-5">
      {/* Hourly */}

      <div
        className={`grid ${
          isBigScreen ? `grid-cols-7` : `grid-cols-3`
        } gap-4`}
      >
        {weather.forecast.forecastday.map((item) => (
          <div
            onClick={(e) => setSelectedDay(item.date)}
            className={
              new Date(item.date).getDate() === new Date(selectedDay).getDate()
                ? "flex flex-col h-32 py-1 px-7 mr-3 mb-6 bg-amber-light rounded-3xl items-center justify-around cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out hover:bg-amber-light text-white"
                : "flex flex-col h-32 py-1 px-7 mr-3 mb-6 bg-customBgColor-light rounded-3xl items-center justify-around cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out hover:bg-amber-light hover:text-white"
            }
          >
            <span className="font-semibold text-sm text-black tracking-widest hover:text-white">
              {moment(item.date).format("ddd")}
            </span>
            <img
              className="h-16 w-16"
              src={item.day.condition.icon}
              alt="icon"
            />
            <div className="flex items-center justify-center">
              <span
                className={
                  new Date(item.date).getDate() ===
                  new Date(selectedDay).getDate()
                    ? "font-medium tracking-widest text-xs text-white mr-1"
                    : "font-medium tracking-widest text-xs text-black mr-1"
                }
              >
                {Math.floor(item.day.avgtemp_c)}°C
              </span>
              <span
                className={
                  new Date(item.date).getDate() ===
                  new Date(selectedDay).getDate()
                    ? "font-medium tracking-widest text-2xs text-white"
                    : "font-medium tracking-widest text-2xs text-gray-300 "
                }
              >
                {Math.floor(item.day.mintemp_c)}°C
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Day HighLights */}
      <div className="flex mt-8">
        <span className="font-medium text-black tracking-wider">
          {moment(selectedDay).format("dddd")} Highlights
        </span>
      </div>

      <SelectedDayHighlights
        dayDetails={weather.forecast.forecastday.find(
          (item) =>
            new Date(item.date).getDate() === new Date(selectedDay).getDate()
        )}
      />
    </div>
  );
};

export default WeeklyTabView;
