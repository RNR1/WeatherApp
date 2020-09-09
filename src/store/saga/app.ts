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

// mock data
import currentCondition from '../../data/currentCondition.json'
import fiveDay from '../../data/FiveDayForecast.json'

export function* autoCompleteSaga({
	payload
}: {
	type: string
	payload: string
}) {
	try {
		yield put(autoCompleteStart())
		const results: AxiosResponse<
			AutocompleteResponse[]
		> = yield API.autocomplete(payload)
		yield put(autoCompleteSuccess(results.data))
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
		// const results: [
		// 	AxiosResponse<currentConditionResponse[]>,
		// 	AxiosResponse<FiveDayForecastResponse>
		// ] = yield Promise.all([
		// 	API.currentCondition(payload.Key),
		// 	API.fiveDayForecast(payload.Key)
		// ])
		const results: [
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
		const {
			Temperature: temp,
			LocalObservationDateTime,
			WeatherText,
			WeatherIcon
		} = yield results[0].data[0]
		const { Metric, Imperial } = temp
		const currentCity = new City(
			payload.LocalizedName,
			payload.Key,
			{
				icon: WeatherIcon,
				description: WeatherText,
				date: LocalObservationDateTime,
				celsius: Metric.Value,
				fahrenheit: Imperial.Value
			},
			[]
		)
		results[1].data.DailyForecasts.forEach((day) => {
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
		yield put(searchSuccess(currentCity))
	} catch (error) {
		yield put(searchFailed(error))
	}
}
