import { AutocompleteDto } from 'api/transform';

enum Search {
  AUTOCOMPLETE = 'search/autoComplete',
  AUTOCOMPLETE_PENDING = 'search/autoCompletePending',
  AUTOCOMPLETE_FULFILLED = 'search/autoCompleteFulfilled',
  AUTOCOMPLETE_REJECTED = 'search/autoCompleteRejected',

  GEOPOSITION = 'search/geoPosition',
  GEOPOSITION_PENDING = 'search/geoPositionPending',
  GEOPOSITION_FULFILLED = 'search/geoPositionFulfilled',
  GEOPOSITION_REJECTED = 'App/geoPositionRejected',

  CLEAR_RESULTS = 'search/clearResults',
  SEARCH_SUBMIT = 'search/submit',
  SEARCH_PENDING = 'search/pending',
  SEARCH_FULFILLED = 'search/fulfilled',
  SEARCH_REJECTED = 'search/rejected',
}

export default Search;

export type AutoCompletePayload = {
  q: string;
  value: AutocompleteDto | null;
};

export type GeoPositionPayload = { lat: string; lon: string };
