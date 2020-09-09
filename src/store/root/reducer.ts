import { Reducer } from 'redux'
import City, { Temperature } from '../../models/City'
import AutoComplete from '../../data/Autocomplete.json'
import { AutocompleteResponse } from '../../models/responses'
import * as Types from '../actions/types'

const mockTemp: Temperature = {
	date: '2020-09-08T18:31:00+03:00',
	icon: 1,
	description: 'Sunny',
	celsius: 30.5,
	fahrenheit: 87
}

let fiveDayMock: Temperature[] = []
for (let i = 0; i < 5; i++) fiveDayMock.push({ ...mockTemp })

const mockCurrent = new City('Tel Aviv', 215854, mockTemp, fiveDayMock)

const mockFavorites: City[] = [
	mockCurrent,
	new City('Jerusalem', 215854, mockTemp),
	new City('Eilat', 215854, mockTemp),
	new City('Madrid', 215854, mockTemp),
	new City('Las Vegas', 215854, mockTemp)
]

interface AppState {
	searchQuery: string
	queryResults: AutocompleteResponse[]
	searching: boolean
	error: string | null
	currentCity: City | null
	favoriteCities: City[] | null
}

const initialState: AppState = {
	searchQuery: '',
	queryResults: AutoComplete,
	searching: false,
	error: null,
	currentCity: mockCurrent,
	favoriteCities: mockFavorites
}

const rootReducer: Reducer<AppState, { type: string; payload: any }> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case Types.AUTOCOMPLETE_START:
			return { ...state, searching: true }
		case Types.AUTOCOMPLETE_SUCCESS:
			return { ...state, searching: false, error: null }
		case Types.AUTOCOMPLETE_FAILED:
			return { ...state, searching: false, error: action.payload }
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
		default:
			return state
	}
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
