import { AxiosResponse } from 'axios'
import {
	currentConditionResponse,
	FiveDayForecastResponse
} from '../models/responses'
import currentCondition from '../data/currentCondition.json'
import fiveDay from '../data/FiveDayForecast.json'

export const searchResults: [
	AxiosResponse<currentConditionResponse[]>,
	AxiosResponse<FiveDayForecastResponse>
] = [
	{
		data: currentCondition as currentConditionResponse[],
		status: 0,
		statusText: '',
		headers: null,
		config: {}
	},
	{
		data: fiveDay as FiveDayForecastResponse,
		status: 0,
		statusText: '',
		headers: null,
		config: {}
	}
]
