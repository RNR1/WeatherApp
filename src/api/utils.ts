import {
	AutocompleteResponse,
	currentConditionResponse,
	FiveDayForecastResponse
} from '../models/responses'
import { AxiosResponse } from 'axios'
import { Temperature } from '../models/City'

export const transformAutocomplete = ({
	data
}: AxiosResponse<AutocompleteResponse[]>): AutocompleteDto[] =>
	data.map((city) => ({
		name: city.LocalizedName,
		locationKey: city.Key,
		countryISO: city.Country.ID
	}))

export type AutocompleteDto = {
	name: string
	locationKey: string
	countryISO: string
}

export const transformCurrentCondition = ({
	data
}: AxiosResponse<currentConditionResponse[]>): Temperature => ({
	icon: transformWeatherIcon(data[0].WeatherIcon),
	description: data[0].WeatherText,
	date: data[0].LocalObservationDateTime,
	celsius: data[0].Temperature.Metric.Value,
	fahrenheit: data[0].Temperature.Imperial.Value
})

export const transformFiveDayForecast = ({
	data: { DailyForecasts }
}: AxiosResponse<FiveDayForecastResponse>): Temperature[] =>
	DailyForecasts.map((day) => ({
		icon: transformWeatherIcon(day.Day.Icon),
		description: day.Day.IconPhrase,
		date: day.Date,
		celsius: day.Temperature.Maximum.Value,
		fahrenheit: transformToFahrenheit(day.Temperature.Maximum.Value)
	}))

export function transformWeatherIcon(icon: number) {
	return icon < 10 ? `0${icon}` : icon.toString()
}

export function transformToFahrenheit(celsius: number) {
	return (celsius / 5) * 9 + 32
}
