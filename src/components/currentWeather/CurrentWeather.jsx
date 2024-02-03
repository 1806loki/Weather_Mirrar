/* eslint-disable react/prop-types */
import "./CurrentWeather.css";

const CurrentWeather = ({ data, unit }) => {
  if (data?.message) {
    return (
      <>
        <p className="errorMessage">{data?.message}</p>
      </>
    );
  }

  const windDirection = getWindDirection(data?.wind?.deg);

  return (
    <div className="currentWeather">
      <div className="container">
        <div className="left">
          <div className="temp">
            <h1>
              {Math.ceil(data?.main?.temp)}{" "}
              <span> {unit === "metric" ? "° C" : "° F"}</span>
            </h1>
            <img
              src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`}
              alt=""
            />
          </div>
          <h1 className="place">{data?.name}</h1>
          <div className="time">
            <p>
              L : {Math.ceil(data?.main?.temp_min)}° H :{" "}
              {Math.ceil(data?.main?.temp_max)}°
            </p>
          </div>
        </div>
        <div className="right">
          <table>
            <tbody>
              <tr>
                <td>Humidity</td>
                <td>{data?.main?.humidity}%</td>
                <td></td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>
                  {`${windDirection} ${data?.wind?.speed}`}
                  <span id="speed"> {unit === "metric" ? "m/s" : "mph"}</span>
                </td>
              </tr>
              <tr>
                <td>{data?.weather?.[0]?.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

const getWindDirection = (degrees) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((degrees % 360) / 45);
  return directions[index % 8];
};
