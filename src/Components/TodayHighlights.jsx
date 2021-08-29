import React, { useContext } from "react";
import { AppContext } from "../App";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const TodayHighlights = () => {
  const {isBigScreen, weather } = useContext(AppContext);

  return (
    <div className="flex flex-col mt-4">
      {/* Grid View */}
      <div
        className={`grid ${isBigScreen ? `grid-cols-4` : `grid-cols-2`} gap-4`}
      >
        {/* Grid Tile */}
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <div className="flex flex-col items-start">
            <span className="font-medium tracking-widest text-xs text-gray-500">
              Uv Index
            </span>

            <div className="ml-5 mb-6">
              <SemiCircleProgressBar
                diameter={130}
                percentage={weather.current.uv}
                showPercentValue
                stroke={"#F8D57E"}
                background={"#DFE2FE"}
              />
            </div>

            <span className="font-semibold tracking-widest text-sm">
              {(weather.current.uv >= 0 && weather.current.uv <= 2 && "Low") ||
                (weather.current.uv >= 3 &&
                  weather.current.uv <= 5 &&
                  "Normal") ||
                (weather.current.uv >= 6 &&
                  weather.current.uv <= 7 &&
                  "High") ||
                (weather.current.uv >= 8 &&
                  weather.current.uv <= 10 &&
                  "Very High") ||
                (weather.current.uv > 10 && "Extreme")}
            </span>
          </div>
        </div>

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
              {weather.forecast.forecastday[0].astro.sunrise}
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
              {weather.forecast.forecastday[0].astro.sunset}
            </span>
          </div>
        </div>

        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Wind Status
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {weather.current.wind_mph}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              km/h
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(weather.current.wind_mph >= 0 &&
              weather.current.wind_mph <= 3 &&
              "Light Air") ||
              (weather.current.wind_mph >= 4 &&
                weather.current.wind_mph <= 7 &&
                "Light Breeze") ||
              (weather.current.wind_mph >= 8 &&
                weather.current.wind_mph <= 12 &&
                "Gentle Breeze") ||
              (weather.current.wind_mph >= 13 &&
                weather.current.wind_mph <= 18 &&
                "Moderate Breeze") ||
              (weather.current.wind_mph > 18 && "Extreme Breeze")}
          </span>
        </div>
        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Visibility
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {weather.current.vis_miles}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              miles
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(weather.current.vis_miles <= 0.5 && "Very Poor") ||
              (weather.current.vis_miles > 0.5 &&
                weather.current.vis_miles <= 2 &&
                "Poor") ||
              (weather.current.vis_miles > 2 &&
                weather.current.vis_miles <= 5 &&
                "Normal") ||
              (weather.current.vis_miles > 5 && "Good")}
          </span>
        </div>

        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Humidity
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {weather.current.humidity}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              %
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(weather.current.humidity < 25 && "Poor") ||
              (weather.current.humidity > 25 &&
                weather.current.humidity < 30 &&
                "Fair") ||
              (weather.current.humidity >= 30 &&
                weather.current.humidity <= 60 &&
                "Normal") ||
              (weather.current.humidity >= 70 && "High")}
          </span>
        </div>

        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-500">
            Air Quality
          </span>
          <div className="flex items-end">
            <span className="font-medium tracking-widest text-2xl">
              {weather.current.air_quality["us-epa-index"]}
            </span>
            <span className="font-semibold tracking-widest text-xs mb-1.5">
              index
            </span>
          </div>
          <span className="font-semibold tracking-widest text-sm">
            {(weather.current.air_quality["us-epa-index"] >= 0 &&
              weather.current.air_quality["us-epa-index"] <= 50 &&
              "Good") ||
              (weather.current.air_quality["us-epa-index"] >= 51 &&
                weather.current.air_quality["us-epa-index"] <= 100 &&
                "Moderate") ||
              (weather.current.air_quality["us-epa-index"] >= 101 &&
                weather.current.air_quality["us-epa-index"] <= 150 &&
                "Unhealthy for Sensitive Groups") ||
              (weather.current.air_quality["us-epa-index"] >= 151 &&
                weather.current.air_quality["us-epa-index"] <= 200 &&
                "Unhealthy") ||
              (weather.current.air_quality["us-epa-index"] >= 201 &&
                weather.current.air_quality["us-epa-index"] <= 300 &&
                "Very Unhealthy") ||
              (weather.current.air_quality["us-epa-index"] >= 301 &&
                "Hazardous")}
          </span>
        </div>

        <div className="h-40 flex flex-col bg-customBgColor-light rounded-3xl items-start justify-between p-4 hover:shadow-md">
          <span className="font-medium tracking-widest text-xs text-gray-400">
            Day/Night
          </span>
          <span className="font-medium tracking-widest text-2xl">
            {(weather.current.is_day === 0 && "Day") ||
              (weather.current.is_day !== 0 && "Night")}
          </span>
          <span className="font-semibold tracking-widest text-sm"></span>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlights;
