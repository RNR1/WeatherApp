import { AxiosResponse } from 'axios';
import * as Response from 'api/responses';
import Temperature from 'models/Temperature';

export interface SearchQueryDto {
  name: string;
  locationKey: string;
}

export interface AutocompleteDto extends SearchQueryDto {
  countryISO: string;
}

export const Autocomplete = ({
  data,
}: AxiosResponse<Response.Autocomplete[]>): AutocompleteDto[] =>
  data.map(city => ({
    name: city.LocalizedName,
    locationKey: city.Key,
    countryISO: city.Country.ID,
  }));

export const CurrentCondition = ({
  data,
}: AxiosResponse<Response.CurrentCondition[]>): Temperature => ({
  icon: WeatherIcon(data[0].WeatherIcon),
  description: data[0].WeatherText,
  date: data[0].LocalObservationDateTime,
  celsius: data[0].Temperature.Metric.Value,
  fahrenheit: data[0].Temperature.Imperial.Value,
});

export const FiveDayForecast = ({
  data: { DailyForecasts },
}: AxiosResponse<Response.FiveDayForecast>): Temperature[] =>
  DailyForecasts.map(day => ({
    icon: WeatherIcon(day.Day.Icon),
    description: day.Day.IconPhrase,
    date: day.Date,
    celsius: day.Temperature.Maximum.Value,
    fahrenheit: ToFahrenheit(day.Temperature.Maximum.Value),
  }));

export const GeoPosition = ({
  data: { LocalizedName, Key },
}: AxiosResponse<Response.GeoPosition>): SearchQueryDto => ({
  name: LocalizedName,
  locationKey: Key,
});

export function WeatherIcon(icon: number) {
  return icon < 10 ? `0${icon}` : icon.toString();
}

export function ToFahrenheit(celsius: number) {
  return celsius * (9 / 5) + 32;
}
