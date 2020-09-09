import { Reducer } from 'redux'
import City, { Temperature } from '../../models/City'
const temp: Temperature = {
	date: '2020-09-08T18:31:00+03:00',
	icon: 1,
	description: 'Sunny',
	celsius: 30.5,
	fahrenheit: 87
}

let fiveDayMock: Temperature[] = []
for (let i = 0; i < 5; i++) fiveDayMock.push({ ...temp })

const mockCurrent = new City('Tel Aviv', 215854, temp, fiveDayMock)

const mockFavorites: City[] = [
	mockCurrent,
	new City('Jerusalem', 215854, temp),
	new City('Eilat', 215854, temp),
	new City('Madrid', 215854, temp),
	new City('Las Vegas', 215854, temp)
]

interface AppState {
	searchQuery: string
	currentCity: City | null
	favoriteCities: City[] | null
}

const initialState: AppState = {
	searchQuery: '',
	currentCity: mockCurrent,
	favoriteCities: mockFavorites
}

const rootReducer: Reducer<AppState> = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
