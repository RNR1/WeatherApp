import { getPreferredColorTheme } from 'utils/darkMode';
import City from 'models/City';

export function getInitialTempUnit(): boolean {
  try {
    const cachedUnit = localStorage.getItem('tempUnit');
    if (!cachedUnit) throw new Error('No data found');
    return JSON.parse(cachedUnit) as boolean;
  } catch (error) {
    return false;
  }
}

export function getInitialTheme(): boolean {
  const isReturningUser = 'dark' in localStorage;
  if (isReturningUser)
    return JSON.parse(localStorage.getItem('dark')!) || false;
  return getPreferredColorTheme();
}

export function getInitialFavorites() {
  const cachedFavorites = localStorage.getItem('favorites');
  try {
    if (!cachedFavorites) throw new Error('Cache data not found');
    const parsedFavorites = JSON.parse(cachedFavorites) as City[];
    return parsedFavorites.map(
      ({ name, locationKey, currentCondition, fiveDayForecast }) =>
        new City(name, locationKey, currentCondition, fiveDayForecast)
    );
  } catch (error) {
    return [] as City[];
  }
}

export function set(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
