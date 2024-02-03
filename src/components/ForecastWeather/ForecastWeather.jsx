/* eslint-disable react/prop-types */
import "./ForecastWeather.css";

const ForecastWeather = ({ data, unit }) => {
  if (data?.message) {
    return null;
  }
  const filteredData = data?.list?.filter((ele) =>
    ele.dt_txt.endsWith("12:00:00")
  );

  return (
    <div className="forecastWeather">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>5-day Weather Forecast</th>
              <th>Temperature </th>
              <th>Weather Description</th>
              <th>Weather Icon</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((ele, id) => (
              <tr key={id}>
                <td>
                  {new Date(ele.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td>
                  {Math.ceil(ele.main.temp)}{" "}
                  <span>{unit === "metric" ? "° C" : "° F"}</span>
                </td>
                <td>{ele.weather?.[0].description}</td>
                <td>
                  <img
                    src={`http://openweathermap.org/img/w/${ele?.weather?.[0]?.icon}.png`}
                    alt={ele.weather?.[0].description || "Weather Icon"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastWeather;
