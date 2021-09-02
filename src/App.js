import { useState, useEffect, useLayoutEffect, createContext } from "react";
import "./App.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import SearchBar from "./Components/SearchBar";
import TopHeader from "./Components/TopHeader";
import TodayTabView from "./Components/TodayTabView";
import WeeklyTabView from "./Components/WeeklyTabView";
import { useMediaQuery } from "react-responsive";
import RightSection from "./Components/RightSection";

export const AppContext = createContext(null);

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchresults, setSearchResults] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  useLayoutEffect(() => {
    const getIpAddress = async () => {
      try {
        const res = await axios.get("https://geolocation-db.com/json/");
        setCurrentLocation(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getIpAddress();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      const apiKey = "3f7b75d863ad43999b1105325212708";

      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentLocation.city}&days=7&aqi=yes&alerts=yes`
        );
        const myWeather = response.data;
        setWeather(myWeather);
      } catch (error) {
        console.error(error.message);
      }
    };
    getWeather();
    // setIsLoading(false);
  }, [currentLocation]);

  return typeof weather.current == "undefined" ? (
    <div className="flex items-center justify-center h-screen">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  ) : (
    <AppContext.Provider
      value={{
        currentLocation,
        weather,
        setWeather,
        isBigScreen,
        searchresults,
        setSearchResults,
        showClearButton,
        setShowClearButton,
      }}
    >
      {isBigScreen ? (
        <div className="flex">
          <div className="App flex flex-col w-3/4">
            {/* Logo */}
            <TopHeader />

            {/* Tabs */}

            <div className="flex items-center justify-center ">
              {/* Search Bar */}
              <SearchBar />
              <div className="tabs tabs-boxed flex items-center justify-between w-72 h-16 rounded-3xl px-5 bg-grey-light cursor-pointer">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab(0);
                    console.log(selectedTab);
                  }}
                  className={
                    selectedTab === 0
                      ? "tabs tab-active w-28 h-10 items-center justify-center font-noraml text-white tracking-wider bg-amber-light rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out"
                      : "tabs w-28 h-10 items-center justify-center font-normal text-gray-400 tracking-wider hover:text-black"
                  }
                >
                  Today
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab(1);
                    console.log(selectedTab);
                  }}
                  className={
                    selectedTab === 1
                      ? "tabs tab-active w-28 h-10 items-center justify-center font-normal text-white  tracking-wider bg-amber-light rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out"
                      : "tabs w-28 h-10 items-center justify-center font-normal text-gray-400 tracking-wider hover:text-black"
                  }
                >
                  Weekly
                </a>
              </div>
            </div>
            {showClearButton && (
              <div className="flex items-center justify-center">
                <span className="font-semibold text-sm text-gray-400 mr-1">
                  show weather of
                </span>
                <span className="font-semibold text-black text-sm">
                  {`${searchresults.location.name} ${searchresults.location.region} ${searchresults.location.country}`}
                </span>
              </div>
            )}
            <div className="flex h-auto items-center justify-center my-5 mx-5">
              {selectedTab === 0 ? <TodayTabView /> : <WeeklyTabView />}
            </div>
          </div>
          <div className="flex flex-grow bg-customPriColor-light">
            <RightSection
              dayDetails={weather.forecast.forecastday.find(
                (item) =>
                  new Date(item.date).getDate() ===
                  new Date(Date.now()).getDate()
              )}
            />
          </div>
        </div>
      ) : (
        <div className="App flex flex-col">
          {/* Logo */}
          <TopHeader />

          {/* Search Bar */}
          <SearchBar />
          {showClearButton && (
            <div className="flex items-center justify-center mb-4">
              <span className="font-semibold text-sm text-gray-400 mr-1">
                showing weather of
              </span>
              <span className="font-semibold text-black text-sm">
                {`${searchresults.location.name} ${searchresults.location.region} ${searchresults.location.country}`}
              </span>
            </div>
          )}
          {/* Tabs */}

          <div className="flex items-center justify-center cursor-pointer">
            <div className="tabs tabs-boxed flex items-center justify-between w-72 h-16 rounded-3xl px-5 bg-grey-light">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTab(0);
                  console.log(selectedTab);
                }}
                className={
                  selectedTab === 0
                    ? "tabs tab-active w-28 h-10 items-center justify-center font-noraml text-white tracking-wider bg-amber-light rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out"
                    : "tabs w-28 h-10 items-center justify-center font-normal text-gray-400 tracking-wider"
                }
              >
                Today
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTab(1);
                  console.log(selectedTab);
                }}
                className={
                  selectedTab === 1
                    ? "tabs tab-active w-28 h-10 items-center justify-center font-normal text-white  tracking-wider bg-amber-light rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out"
                    : "tabs w-28 h-10 items-center justify-center font-normal text-gray-400 tracking-wider"
                }
              >
                Weekly
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center"></div>
          <div className="flex h-auto  pt-42 items-center justify-center my-5 mx-5">
            {selectedTab === 0 ? <TodayTabView /> : <WeeklyTabView />}
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}
export default App;
