import { useEffect, useState } from "react";
import ForecastWeather from "../components/ForecastWeather/ForecastWeather";
import SearchBar from "../components/SearchBar/SearchBar";
import CurrentWeather from "../components/currentWeather/CurrentWeather";
import "./HomePage.css";
import { fetchCurrentWeather, fetchForecastWeather } from "./../services/api";
import ToggleButton from "./../components/toggleButton/ToggleButton";

const HomePage = () => {
  const [enteredPlace, setEnteredPlace] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  // const [backgroundImage, setBackgroundImage] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("metric");
  // const [weatherCondition, setWeatherCondition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather(enteredPlace, temperatureUnit);
        setWeatherData(data);
        // setWeatherCondition(data?.weather?.[0]?.main);
      } catch (error) {
        console.log(error);
      }
    };

    if (enteredPlace) {
      fetchData();
    }
  }, [enteredPlace, temperatureUnit]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchForecastWeather(enteredPlace, temperatureUnit);
        setForecastData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (enteredPlace) {
      fetchData();
    }
  }, [enteredPlace, temperatureUnit]);

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.unsplash.com/photos/random?query=${weatherCondition}&orientation=landscape&featured=true&client_id=Gn3_6ZhUE9LQ_w_xLh0Pmh2rXvDQvMsaMbHm7f_HrC4`
  //       );

  //       if (!response.ok) {
  //         throw new Error(`Failed to fetch image: ${response.statusText}`);
  //       }

  //       const imageData = await response.json();
  //       setBackgroundImage(imageData.urls.regular);
  //     } catch (error) {
  //       console.error("Error fetching image:", error);
  //     }
  //   };

  //   if (enteredPlace) {
  //     fetchImage();
  //   }
  // }, [weatherCondition]);

  const handlePlaceChange = (place) => {
    setEnteredPlace(place);
  };
  const handleToggle = (unit) => {
    setTemperatureUnit(unit);
  };

  return (
    <div
      className="HomePage"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SearchBar onPlaceChange={handlePlaceChange} data={weatherData} />
      <div className="container">
        <ToggleButton onToggle={handleToggle} />
        <div className="main">
          <CurrentWeather data={weatherData} unit={temperatureUnit} />
          <ForecastWeather data={forecastData} unit={temperatureUnit} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
