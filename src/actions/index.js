import axios from 'axios';

const API_KEY = '75c660d03dbedf883397e18f83c7e6b9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

// use variables to store action types!
export const FETCH_WEATHER = 'FETCH_WEATHER';

// when user submits form, action creator fetchWeather gets called
// using axios we fetch data from api, and promise is returned
// promise is a data structure, which does not contain our request data yet
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  // we return promise as 'payload'
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
