import City from 'models/City';
import { RootState } from 'store/reducer/root';

export function add(state: RootState): City[] {
  return [...state.favoriteCities, state.currentCity!];
}
export function remove(state: RootState): City[] {
  return state.favoriteCities.filter(
    city => city.name !== state.currentCity?.name
  );
}

export function isFavorite(favoriteCities: City[], currentCity: City): boolean {
  return (
    favoriteCities.findIndex(city => city.name === currentCity?.name) !== -1
  );
}
