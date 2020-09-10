import City from '../../models/City'
import { AppState } from '../root/reducer'

export function getInitialFavorites() {
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
export function addToFavorites(state: AppState): City[] {
	const updatedFavorites = [...state.favoriteCities, state.currentCity!]
	localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
	return updatedFavorites
}
export function removeFromFavorites(state: AppState): City[] {
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
