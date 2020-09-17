import City from '../../models/City'
import { AppState } from '../reducer/root'

export function addToFavorites(state: AppState): City[] {
	return [...state.favoriteCities, state.currentCity!]
}
export function removeFromFavorites(state: AppState): City[] {
	return state.favoriteCities.filter(
		(city) => city.name !== state.currentCity?.name
	)
}

export function isFavorite(favoriteCities: City[], currentCity: City): boolean {
	return (
		favoriteCities.findIndex((city) => city.name === currentCity?.name) !== -1
	)
}
