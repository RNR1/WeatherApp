import { Reducer } from 'redux'
import City from '../../models/City'

interface AppState {
	searchQuery: string
	currentCity: City | null
	favoriteCities: City[] | null
}

const initialState: AppState = {
	searchQuery: '',
	currentCity: null,
	favoriteCities: null
}

const rootReducer: Reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
