import { SearchQueryDto } from 'api/transform';

export const DEFAULT_CITY = 'Tel Aviv';
export const DEFAULT_LOCATION_KEY = '215854';

export const DEFAULT_QUERY: SearchQueryDto = {
  name: 'Tel Aviv',
  locationKey: '215854',
};

export const CLICKABLE = { cursor: 'pointer' };

export const AUTOCOMPLETE_PROPS = {
  style: { width: 300, marginTop: 10 },
  autoHighlight: true,
  autoComplete: true,
  includeInputInList: true,
  filterSelectedOptions: true,
};
