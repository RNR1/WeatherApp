import { put } from 'redux-saga/effects'
import {
	autoCompleteStart,
	autoCompleteSuccess,
	autoCompleteFailed,
	searchStart,
	searchSuccess,
	searchFailed
} from '../actions/app'
import API from '../../api/client'
import { AxiosResponse } from 'axios'
import {
	AutocompleteResponse,
	currentConditionResponse,
	FiveDayForecastResponse
} from '../../models/responses'
import City, { Temperature } from '../../models/City'
import { AutocompleteDto } from '../../api/utils'

export function* autoCompleteSaga({
	payload
}: {
	type: string
	payload: string
}) {
	try {
		yield put(autoCompleteStart())
		const results: AutocompleteDto[] = yield API.autocomplete(payload)
		yield put(autoCompleteSuccess(results))
	} catch (error) {
		yield put(autoCompleteFailed(error))
	}
}

export function* searchSaga({
	payload
}: {
	type: string
	payload: AutocompleteResponse
}) {
	try {
		yield put(searchStart())
		const [currentCondition, FiveDayForecast]: [
			AxiosResponse<currentConditionResponse[]>,
			AxiosResponse<FiveDayForecastResponse>
		] = yield Promise.all([
			API.currentCondition(payload.Key),
			API.fiveDayForecast(payload.Key)
		])

		const currentCity = yield transformCityData(
			currentCondition.data[0],
			FiveDayForecast.data,
			payload
		)
		yield put(searchSuccess(currentCity))
	} catch (error) {
		yield put(searchFailed(error))
	}
}
function transformCityData(
	{
		Temperature: temp,
		LocalObservationDateTime,
		WeatherText,
		WeatherIcon
	}: currentConditionResponse,
	{ DailyForecasts }: FiveDayForecastResponse,
	{ LocalizedName, Key }: AutocompleteResponse
) {
	const { Metric, Imperial } = temp
	const currentCity = new City(
		LocalizedName,
		Key,
		{
			icon: WeatherIcon,
			description: WeatherText,
			date: LocalObservationDateTime,
			celsius: Metric.Value,
			fahrenheit: Imperial.Value
		},
		[]
	)
	DailyForecasts.forEach((day) => {
		const { Day, Temperature: temp, Date } = day
		const { Maximum } = temp
		const dto: Temperature = {
			icon: Day.Icon,
			description: Day.IconPhrase,
			date: Date,
			celsius: Maximum.Value,
			fahrenheit: Maximum.Value
		}
		currentCity.fiveDayForecast?.push(dto)
	})
	return currentCity
}
