import React, { useState, useEffect } from 'react';
import WeatherChart from '../components/WeatherChart/WeatherChart';
import TableWeather from '../components/TableWeather/TableWeather';
import OneCurrectInfo from '../components/OneCurrectInfo/OneCurrectInfo';

export default function AllWeatherData() {
  const [weatherData, setweatherData] = useState({
    weather: [],
    isLoaded: false,
    currentHour: [],
    next8days: [],
    next24Hours: [],
  });
  return (
    <div>
      {weatherData.isLoaded && (
        <>
          <WeatherChart />
          <br />
          <TableWeather />
          <OneCurrectInfo />
        </>
      )}
    </div>
  );
}
