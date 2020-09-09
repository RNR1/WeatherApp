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
	payload: { name, locationKey }
}: {
	type: string
	payload: AutocompleteDto
}) {
	try {
		yield put(searchStart())
		const [currentCondition, fiveDayForecast]: [
			Temperature,
			Temperature[]
		] = yield Promise.all([
			API.currentCondition(locationKey),
			API.fiveDayForecast(locationKey)
		])

		const currentCity = new City(
			name,
			locationKey,
			currentCondition,
			fiveDayForecast
		)
		yield put(searchSuccess(currentCity))
	} catch (error) {
		yield put(searchFailed(error))
	}
}
