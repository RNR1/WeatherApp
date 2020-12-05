import City from 'models/City';

export function add(favoriteCities: City[], currentCity: City): City[] {
  return [...favoriteCities, currentCity];
}
export function remove(favoriteCities: City[], currentCity: City): City[] {
  return favoriteCities.filter(city => city.name !== currentCity.name);
}

export function isFavorite(favoriteCities: City[], currentCity: City): boolean {
  return (
    favoriteCities.findIndex(city => city.name === currentCity?.name) !== -1
  );
}
