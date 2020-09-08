import axios from 'axios'
import {
	AutocompleteResponse,
	currentConditionResponse,
	FiveDayForecastResponse,
	GeoPositionResponse
} from '../models/responses'
const apiKey = process.env.REACT_APP_API_KEY

const client = axios.create({
	baseURL: 'http://dataservice.accuweather.com'
})

const API = {
	autocomplete: (q: string) =>
		client.get<AutocompleteResponse[]>(
			`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`
		),
	currentCondition: (locationKey: string = '21584') =>
		client.get<currentConditionResponse[]>(
			`/currentconditions/v1/${locationKey}?apikey=${apiKey}`
		),
	fiveDayForecast: (locationKey: string = '21584') =>
		client.get<FiveDayForecastResponse>(
			`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`
		),
	geoPosition: ({ lat, lon }: { lat: string; lon: string }) =>
		client.get<GeoPositionResponse>(
			`/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}, ${lon}`
		)
}

export default API
