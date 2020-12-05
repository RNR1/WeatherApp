import City from 'models/City';
import { AutocompleteDto, SearchQueryDto } from 'api/transform';
import Search, {
  AutoCompletePayload,
  GeoPositionPayload,
} from 'store/consts/search.consts';

export const autoComplete = (payload: AutoCompletePayload) => ({
  type: Search.AUTOCOMPLETE,
  payload,
});

export const autoCompletePending = () => ({
  type: Search.AUTOCOMPLETE_PENDING,
  payload: null,
});

export const autoCompleteFulfilled = (payload: AutocompleteDto[]) => ({
  type: Search.AUTOCOMPLETE_FULFILLED,
  payload,
});

export const autoCompleteRejected = (payload: Error) => ({
  type: Search.AUTOCOMPLETE_REJECTED,
  payload: payload.message,
});

export const clearResults = () => ({
  type: Search.CLEAR_RESULTS,
  payload: null,
});

export const geoPosition = (payload: GeoPositionPayload) => ({
  type: Search.GEOPOSITION,
  payload,
});

export const geoPositionPending = () => ({
  type: Search.GEOPOSITION_PENDING,
  payload: null,
});

export const geoPositionFulfilled = () => ({
  type: Search.GEOPOSITION_FULFILLED,
  payload: null,
});

export const geoPositionRejected = (payload: Error) => ({
  type: Search.GEOPOSITION_REJECTED,
  payload: payload.message,
});

export const searchSubmit = (payload: SearchQueryDto) => ({
  type: Search.SEARCH_SUBMIT,
  payload,
});

export const searchPending = () => ({
  type: Search.SEARCH_PENDING,
  payload: null,
});

export const searchFulfilled = (payload: City) => ({
  type: Search.SEARCH_FULFILLED,
  payload,
});

export const searchRejected = (payload: Error) => ({
  type: Search.SEARCH_REJECTED,
  payload: payload.message,
});

type SearchAction = ReturnType<
  | typeof autoComplete
  | typeof autoCompletePending
  | typeof autoCompleteFulfilled
  | typeof autoCompleteRejected
  | typeof clearResults
  | typeof geoPosition
  | typeof geoPositionPending
  | typeof geoPositionFulfilled
  | typeof geoPositionRejected
  | typeof searchSubmit
  | typeof searchPending
  | typeof searchFulfilled
  | typeof searchRejected
>;

export default SearchAction;
