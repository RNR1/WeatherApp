import axios, { AxiosRequestConfig } from 'axios';
import { DEFAULT_LOCATION_KEY } from 'config/consts';
import * as Response from 'api/responses';
import * as Transform from 'api/transform';

const apiKey = process.env.REACT_APP_API_KEY;

export const client = axios.create({
  baseURL: 'https://dataservice.accuweather.com',
});
const API = {
  autocomplete: (q: string, config?: AxiosRequestConfig) =>
    client
      .get<Response.Autocomplete[]>(
        `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`,
        config
      )
      .then(Transform.Autocomplete),
  currentCondition: (locationKey: string = DEFAULT_LOCATION_KEY) =>
    client
      .get<Response.CurrentCondition[]>(
        `/currentconditions/v1/${locationKey}?apikey=${apiKey}`
      )
      .then(Transform.CurrentCondition),
  fiveDayForecast: (locationKey: string = DEFAULT_LOCATION_KEY) =>
    client
      .get<Response.FiveDayForecast>(
        `/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`
      )
      .then(Transform.FiveDayForecast),
  geoPosition: ({ lat, lon }: { lat: string; lon: string }) =>
    client
      .get<Response.GeoPosition>(
        `/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}, ${lon}`
      )
      .then(Transform.GeoPosition),
};

export default API;
