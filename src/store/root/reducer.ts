import { Reducer } from 'redux'
import City, { Temperature } from '../../models/City'
import * as Types from '../actions/types'
import { AutocompleteDto } from '../../api/utils'

const mockTemp: Temperature = {
	date: '2020-09-08T18:31:00+03:00',
	icon: `01`,
	description: 'Sunny',
	celsius: 30.5,
	fahrenheit: 87
}

let fiveDayMock: Temperature[] = []
for (let i = 0; i < 5; i++) fiveDayMock.push({ ...mockTemp })

const mockCurrent = new City('Tel Aviv', '215854', mockTemp, fiveDayMock)

interface AppState {
	queryResults: AutocompleteDto[]
	searching: boolean
	error: string | null
	currentCity: City | null
	favoriteCities: City[]
}

const initialState: AppState = {
	queryResults: [],
	searching: false,
	error: null,
	currentCity: mockCurrent,
	favoriteCities: getInitialFavorites()
}

const rootReducer: Reducer<AppState, { type: string; payload: any }> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case Types.AUTOCOMPLETE_START:
			return { ...state, searching: true }
		case Types.AUTOCOMPLETE_SUCCESS:
			return {
				...state,
				searching: false,
				error: null,
				queryResults: action.payload
			}
		case Types.AUTOCOMPLETE_FAILED:
			return { ...state, searching: false, error: action.payload }
		case Types.CLEAR_RESULTS:
			return { ...state, queryResults: [] }
		case Types.SEARCH_START:
			return { ...state, searching: true }
		case Types.SEARCH_SUCCESS:
			return {
				...state,
				searching: false,
				error: null,
				currentCity: action.payload
			}
		case Types.SEARCH_FAILED:
			return { ...state, searching: false, error: action.payload }
		case Types.TOGGLE_FAVORITE:
			return {
				...state,
				favoriteCities: isFavorite(state.favoriteCities, state.currentCity!)
					? removeFromFavorites(state)
					: addToFavorites(state)
			}
		default:
			return state
	}
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

function getInitialFavorites() {
	const cachedFavorites = localStorage.getItem('favorites')
	try {
		if (!cachedFavorites) throw new Error('Cache data not found')
		const parsedFavorites = JSON.parse(cachedFavorites) as City[]
		return parsedFavorites.map(
			(f) =>
				new City(f.name, f.locationKey, f.currentCondition, f.fiveDayForecast)
		)
	} catch (error) {
		return [] as City[]
	}
}

function addToFavorites(state: AppState): City[] {
	const updatedFavorites = [...state.favoriteCities, state.currentCity!]
	localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
	return updatedFavorites
}

function removeFromFavorites(state: AppState): City[] {
	const updatedFavorites = state.favoriteCities.filter(
		(city) => city.name !== state.currentCity?.name
	)
	localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
	return updatedFavorites
}

export function isFavorite(favoriteCities: City[], currentCity: City): boolean {
	return (
		favoriteCities.findIndex((city) => city.name === currentCity?.name) !== -1
	)
}
