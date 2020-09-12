import axios, { AxiosRequestConfig } from 'axios'
import {
	AutocompleteResponse,
	currentConditionResponse,
	FiveDayForecastResponse,
	GeoPositionResponse
} from './responses'
import {
	transformAutocomplete,
	transformCurrentCondition,
	transformFiveDayForecast,
	transformGeoPosition
} from './transform'
const apiKey = process.env.REACT_APP_API_KEY

export const client = axios.create({
	baseURL: 'https://dataservice.accuweather.com'
})
const API = {
	autocomplete: (q: string, config?: AxiosRequestConfig) =>
		client
			.get<AutocompleteResponse[]>(
				`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`,
				config
			)
			.then(transformAutocomplete),
	currentCondition: (locationKey: string = '21584') =>
		client
			.get<currentConditionResponse[]>(
				`/currentconditions/v1/${locationKey}?apikey=${apiKey}`
			)
			.then(transformCurrentCondition),
	fiveDayForecast: (locationKey: string = '21584') =>
		client
			.get<FiveDayForecastResponse>(
				`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`
			)
			.then(transformFiveDayForecast),
	geoPosition: ({ lat, lon }: { lat: string; lon: string }) =>
		client
			.get<GeoPositionResponse>(
				`/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}, ${lon}`
			)
			.then(transformGeoPosition)
}

export default API
