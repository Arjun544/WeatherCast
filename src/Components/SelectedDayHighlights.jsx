import React, { useContext } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { AppContext } from "../App";

const SelectedDayHighlights = ({ dayDetails }) => {
   const { isBigScreen } = useContext(AppContext);
  return (
    <div className="flex flex-col  mt-4">
      {/* Grid View */}
      <div
        className={`grid ${isBigScreen ? `grid-cols-4` : `grid-cols-2`} gap-4`}
      >
        {/* General */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            General
          </span>
          <div className="flex items-center">
            <img
              className="h-12"
              src={dayDetails.day.condition.icon}
              alt="icon"
            />
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              {dayDetails.day.condition.text}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium tracking-widest text-xs text-gray-300 mr-1">
              Max
            </span>
            <span className="font-semibold tracking-widest text-sm mr-3">
              {dayDetails.day.maxtemp_c}
            </span>
            <span className="font-medium tracking-widest text-xs text-gray-300 mr-1">
              Min
            </span>
            <span className="font-semibold tracking-widest text-sm">
              {dayDetails.day.mintemp_c}
            </span>
          </div>
        </div>
        {/* UV indec */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <div className="flex flex-col items-start">
            <span className="font-medium tracking-widest text-xs text-gray-500">
              Uv Index
            </span>

            <div className="ml-5 mb-6">
              <SemiCircleProgressBar
                diameter={130}
                percentage={dayDetails.day.uv}
                showPercentValue
                stroke={"#F8D57E"}
                background={"#DFE2FE"}
              />
            </div>

            <span className="font-semibold tracking-widest text-sm">
              {(dayDetails.day.uv >= 0 && dayDetails.day.uv <= 2 && "Low") ||
                (dayDetails.day.uv >= 3 &&
                  dayDetails.day.uv <= 5 &&
                  "Normal") ||
                (dayDetails.day.uv >= 6 && dayDetails.day.uv <= 7 && "High") ||
                (dayDetails.day.uv >= 8 &&
                  dayDetails.day.uv <= 10 &&
                  "Very High") ||
                (dayDetails.day.uv > 10 && "Extreme")}
            </span>
          </div>
        </div>
        {/* Sunrise & Sunset */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Sunrise & Sunset
          </span>
          <div className="flex items-center">
            <svg
              id="Iconly_Bold_Arrow_-_Up_2"
              data-name="Iconly/Bold/Arrow - Up 2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g
                id="Arrow_-_Up_2"
                data-name="Arrow - Up 2"
                transform="translate(6 7)"
              >
                <path
                  id="Arrow_-_Up_2-2"
                  data-name="Arrow - Up 2"
                  d="M7.131.369c.058.057.306.27.51.469a21.69,21.69,0,0,1,4.024,5.8A4.617,4.617,0,0,1,12,7.812a1.933,1.933,0,0,1-.218.9,1.874,1.874,0,0,1-.9.795,9.84,9.84,0,0,1-1.064.256A23.979,23.979,0,0,1,6.008,10a27.724,27.724,0,0,1-3.689-.213A8.495,8.495,0,0,1,.992,9.446,1.785,1.785,0,0,1,0,7.868V7.812A4.879,4.879,0,0,1,.409,6.491,21.69,21.69,0,0,1,4.375.823,5.66,5.66,0,0,1,4.929.341,1.783,1.783,0,0,1,5.993,0,1.875,1.875,0,0,1,7.131.369"
                  fill="#f8d57e"
                />
              </g>
            </svg>
            <span className="font-semibold tracking-widest text-lg">
              {dayDetails.astro.sunrise}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              id="Iconly_Bold_Arrow_-_Down_2"
              data-name="Iconly/Bold/Arrow - Down 2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g
                id="Arrow_-_Down_2"
                data-name="Arrow - Down 2"
                transform="translate(6 7)"
              >
                <path
                  id="Arrow_-_Down_2-2"
                  data-name="Arrow - Down 2"
                  d="M4.869,9.631c-.058-.057-.306-.27-.51-.469a21.69,21.69,0,0,1-4.024-5.8A4.617,4.617,0,0,1,0,2.188a1.933,1.933,0,0,1,.218-.9A1.874,1.874,0,0,1,1.122.5,9.84,9.84,0,0,1,2.186.242,23.979,23.979,0,0,1,5.992,0,27.724,27.724,0,0,1,9.681.213a8.495,8.495,0,0,1,1.327.341A1.785,1.785,0,0,1,12,2.132v.057a4.879,4.879,0,0,1-.409,1.321A21.69,21.69,0,0,1,7.625,9.177a5.66,5.66,0,0,1-.554.482A1.783,1.783,0,0,1,6.007,10a1.875,1.875,0,0,1-1.138-.369"
                  fill="#f8d57e"
                />
              </g>
            </svg>

            <span className="font-semibold tracking-widest text-lg">
              {dayDetails.astro.sunset}
            </span>
          </div>
        </div>
        {/* Moonrise & Moonset */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Moonrise & Moonset
          </span>
          <div className="flex items-center">
            <svg
              id="Iconly_Bold_Arrow_-_Up_2"
              data-name="Iconly/Bold/Arrow - Up 2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g
                id="Arrow_-_Up_2"
                data-name="Arrow - Up 2"
                transform="translate(6 7)"
              >
                <path
                  id="Arrow_-_Up_2-2"
                  data-name="Arrow - Up 2"
                  d="M7.131.369c.058.057.306.27.51.469a21.69,21.69,0,0,1,4.024,5.8A4.617,4.617,0,0,1,12,7.812a1.933,1.933,0,0,1-.218.9,1.874,1.874,0,0,1-.9.795,9.84,9.84,0,0,1-1.064.256A23.979,23.979,0,0,1,6.008,10a27.724,27.724,0,0,1-3.689-.213A8.495,8.495,0,0,1,.992,9.446,1.785,1.785,0,0,1,0,7.868V7.812A4.879,4.879,0,0,1,.409,6.491,21.69,21.69,0,0,1,4.375.823,5.66,5.66,0,0,1,4.929.341,1.783,1.783,0,0,1,5.993,0,1.875,1.875,0,0,1,7.131.369"
                  fill="#f8d57e"
                />
              </g>
            </svg>
            <span className="font-semibold tracking-widest text-lg">
              {dayDetails.astro.moonrise}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              id="Iconly_Bold_Arrow_-_Down_2"
              data-name="Iconly/Bold/Arrow - Down 2"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g
                id="Arrow_-_Down_2"
                data-name="Arrow - Down 2"
                transform="translate(6 7)"
              >
                <path
                  id="Arrow_-_Down_2-2"
                  data-name="Arrow - Down 2"
                  d="M4.869,9.631c-.058-.057-.306-.27-.51-.469a21.69,21.69,0,0,1-4.024-5.8A4.617,4.617,0,0,1,0,2.188a1.933,1.933,0,0,1,.218-.9A1.874,1.874,0,0,1,1.122.5,9.84,9.84,0,0,1,2.186.242,23.979,23.979,0,0,1,5.992,0,27.724,27.724,0,0,1,9.681.213a8.495,8.495,0,0,1,1.327.341A1.785,1.785,0,0,1,12,2.132v.057a4.879,4.879,0,0,1-.409,1.321A21.69,21.69,0,0,1,7.625,9.177a5.66,5.66,0,0,1-.554.482A1.783,1.783,0,0,1,6.007,10a1.875,1.875,0,0,1-1.138-.369"
                  fill="#f8d57e"
                />
              </g>
            </svg>

            <span className="font-semibold tracking-widest text-lg">
              {dayDetails.astro.moonrise}
            </span>
          </div>
        </div>
        {/* Wind Status */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Wind Status
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {dayDetails.day.maxwind_mph}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              km/h
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(dayDetails.day.maxwind_mph >= 0 &&
              dayDetails.day.maxwind_mph <= 3 &&
              "Light Air") ||
              (dayDetails.day.maxwind_mph >= 4 &&
                dayDetails.day.maxwind_mph <= 7 &&
                "Light Breeze") ||
              (dayDetails.day.maxwind_mph >= 8 &&
                dayDetails.day.maxwind_mph <= 12 &&
                "Gentle Breeze") ||
              (dayDetails.day.maxwind_mph >= 13 &&
                dayDetails.day.maxwind_mph <= 18 &&
                "Moderate Breeze") ||
              (dayDetails.day.maxwind_mph > 18 && "Extreme Breeze")}
          </span>
        </div>
        {/* Visibility */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Visibility
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {dayDetails.day.avgvis_miles}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              miles
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(dayDetails.day.avgvis_miles <= 0.5 && "Very Poor") ||
              (dayDetails.day.avgvis_miles > 0.5 &&
                dayDetails.day.avgvis_miles <= 2 &&
                "Poor") ||
              (dayDetails.day.avgvis_miles > 2 &&
                dayDetails.day.avgvis_miles <= 5 &&
                "Normal") ||
              (dayDetails.day.avgvis_miles > 5 && "Good")}
          </span>
        </div>
        {/* Humidity */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Humidity
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {dayDetails.day.avghumidity}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              %
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(dayDetails.day.avghumidity < 25 && "Poor") ||
              (dayDetails.day.avghumidity > 25 &&
                dayDetails.day.avghumidity < 30 &&
                "Fair") ||
              (dayDetails.day.avghumidity >= 30 &&
                dayDetails.day.avghumidity <= 60 &&
                "Normal") ||
              (dayDetails.day.avghumidity >= 70 && "High")}
          </span>
        </div>
        {/* Rain chances */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <div className="flex flex-col items-start">
            <span className="font-medium tracking-widest text-xs text-gray-500">
              Rain chance
            </span>

            <div className="ml-5 mb-6">
              <SemiCircleProgressBar
                diameter={130}
                percentage={dayDetails.day.daily_chance_of_rain}
                showPercentValue
                stroke={"#F8D57E"}
                background={"#DFE2FE"}
              />
            </div>

            <span className="font-semibold tracking-widest text-sm">
              {(dayDetails.day.daily_chance_of_rain < 20 && "Very Light") ||
                (dayDetails.day.daily_chance_of_rain >= 30 &&
                  dayDetails.day.daily_chance_of_rain <= 50 &&
                  "Normal") ||
                (dayDetails.day.daily_chance_of_rain >= 60 &&
                  dayDetails.day.daily_chance_of_rain <= 70 &&
                  "High") ||
                (dayDetails.day.daily_chance_of_rain > 70 && "Extreme")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedDayHighlights;
