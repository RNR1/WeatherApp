import City from 'models/City';
import { AutocompleteDto } from 'api/transform';
import SearchAction from 'store/actions/search.actions';
import Search from 'store/consts/search.consts';

export interface SearchState {
  queryResults: AutocompleteDto[];
  searching: boolean;
  error: string | null;
  currentCity: City | null;
}

const initialState: SearchState = {
  queryResults: [],
  searching: false,
  error: null,
  currentCity: null,
};

const searchReducer = (
  state: SearchState = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case Search.AUTOCOMPLETE:
      return { ...state, searching: true };
    case Search.AUTOCOMPLETE_FULFILLED:
      return {
        ...state,
        searching: false,
        error: null,
        queryResults: action.payload as AutocompleteDto[],
      };
    case Search.AUTOCOMPLETE_REJECTED:
      return { ...state, searching: false, error: action.payload as string };
    case Search.CLEAR_RESULTS:
      return { ...state, queryResults: [] };
    case Search.GEOPOSITION_PENDING:
      return { ...state, searching: true };
    case Search.GEOPOSITION_FULFILLED:
      return { ...state, searching: false, error: null };
    case Search.GEOPOSITION_REJECTED:
      return {
        ...state,
        searching: false,
        error: action.payload as string,
      };
    case Search.SEARCH_PENDING:
      return { ...state, searching: true };
    case Search.SEARCH_FULFILLED:
      return {
        ...state,
        searching: false,
        error: null,
        currentCity: action.payload as City,
      };
    case Search.SEARCH_REJECTED:
      return { ...state, searching: false, error: action.payload as string };
    default:
      return state;
  }
};

export default searchReducer;
