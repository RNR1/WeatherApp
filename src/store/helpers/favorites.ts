import City from '../../models/City'
import { AppState } from '../reducer/root'
import * as cache from './cache'

export function addToFavorites(state: AppState): City[] {
	const updatedFavorites = [...state.favoriteCities, state.currentCity!]
	cache.set('favorites', updatedFavorites)
	return updatedFavorites
}
export function removeFromFavorites(state: AppState): City[] {
	const updatedFavorites = state.favoriteCities.filter(
		(city) => city.name !== state.currentCity?.name
	)
	cache.set('favorites', updatedFavorites)
	return updatedFavorites
}

export function isFavorite(favoriteCities: City[], currentCity: City): boolean {
	return (
		favoriteCities.findIndex((city) => city.name === currentCity?.name) !== -1
	)
}
