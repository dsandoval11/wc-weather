import icons from './icons.js';

const API = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'API_KEY';

export const getTemperature = async (city) => {
  const resp = await fetch(`${API}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
  const { name, sys, weather, main, wind } = await resp.json();

  const weatherData = {
    city: name,
    countryCode: sys.country,
    description: weather[0].description,
    feelsLike: parseInt(main.feels_like, 10),
    humidity: main.humidity,
    icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    temperature: parseInt(main.temp, 10),
    wind: wind.speed
  }
  return weatherData;
}
