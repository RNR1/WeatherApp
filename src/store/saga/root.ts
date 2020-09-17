import { put, select } from 'redux-saga/effects'

import * as Actions from '../actions/root'
import API from '../../api/client'
import { autocomplete } from '../../api/utils'
import City from '../../models/City'
import Temperature from '../../models/Temperature'
import { AutocompleteDto, GeoPositionDto } from '../../api/transform'
import { RootState } from '../reducer/root'
import {
	addToFavorites,
	isFavorite,
	removeFromFavorites
} from '../helpers/favorites'
import * as cache from '../helpers/cache'

export function* autoCompleteSaga({
	payload
}: {
	type: string
	payload: string
}) {
	try {
		yield put(Actions.autoCompleteStart())
		const results: AutocompleteDto[] = yield autocomplete(payload)
		yield put(Actions.autoCompleteSuccess(results))
	} catch (error) {
		yield put(Actions.autoCompleteFailed(error))
	}
}

export function* geoPositionSaga({
	payload
}: {
	type: string
	payload: { lat: string; lon: string }
}) {
	try {
		yield put(Actions.geoPositionStart())
		const results: GeoPositionDto = yield API.geoPosition(payload)
		yield put(Actions.geoPositionSuccess())
		yield put(Actions.search(results))
	} catch (error) {
		yield put(Actions.geoPositionFailed(error))
	}
}

export function* searchSaga({
	payload: { name, locationKey }
}: {
	type: string
	payload: AutocompleteDto
}) {
	try {
		yield put(Actions.searchStart())
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
		yield put(Actions.searchSuccess(currentCity))
	} catch (error) {
		yield put(Actions.searchFailed(error))
	}
}

export function* toggleFavoriteSaga() {
	const state: RootState = yield select()
	const { favoriteCities, currentCity } = state
	const updatedFavorites = yield isFavorite(favoriteCities, currentCity!)
		? removeFromFavorites(state)
		: addToFavorites(state)
	yield cache.set('favorites', updatedFavorites)
	yield put(Actions.toggleFavoriteSuccess(updatedFavorites))
}

export function* toggleDarkModeSaga() {
	const { darkMode }: RootState = yield select()
	cache.set('dark', !darkMode)
	yield put(Actions.toggleDarkModeSuccess(!darkMode))
}

export function* toggleTempUnitSaga() {
	const { tempUnit }: RootState = yield select()
	cache.set('tempUnit', !tempUnit)
	yield put(Actions.toggleTempUnitSuccess(!tempUnit))
}
