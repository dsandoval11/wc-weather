const API = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'API_KEY';

export const getTemperature = async (city) => {
  const resp = await fetch(`${API}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
  const { name, sys, weather, main, wind } = await resp.json();

  const weatherData = {
    city: name,
    countryCode: sys.country,
    description: weather[0].description,
    feelsLike: main.feels_like,
    humidity: main.humidity,
    icon: weather[0].icon,
    temperature: main.temp,
    wind: wind.speed
  }
  return weatherData;
}

export const getIcon = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`
