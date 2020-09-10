import { getPreferredColorTheme } from './darkMode'
import City from '../../models/City'

export function getInitialUnit(): boolean {
	try {
		const cachedUnit = localStorage.getItem('tempUnit')
		if (!cachedUnit) throw new Error('No data found')
		return JSON.parse(cachedUnit) as boolean
	} catch (error) {
		return false
	}
}

export function getInitialTheme(): boolean {
	const isReturningUser = 'dark' in localStorage
	if (isReturningUser) return JSON.parse(localStorage.getItem('dark')!) || false
	return getPreferredColorTheme()
}

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

export function set(key: string, value: any) {
	localStorage.setItem(key, JSON.stringify(value))
}
