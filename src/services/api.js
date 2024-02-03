const apiId = "ced880cb172cc80ae8727f42ce6e6258";

export const fetchCurrentWeather = async (place, unit) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiId}&units=${unit}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchForecastWeather = async (place, unit) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${apiId}&units=${unit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
