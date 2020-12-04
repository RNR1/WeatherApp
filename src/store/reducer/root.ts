import { Reducer } from 'redux';
import City from 'models/City';
import * as Types from 'store/actions/types';
import * as cache from 'store/helpers/cache';
import { AutocompleteDto } from 'api/transform';
import { RootAction } from 'store/actions/root';

export interface State {
  darkMode: boolean;
  tempUnit: boolean;
  queryResults: AutocompleteDto[];
  searching: boolean;
  loading: boolean;
  error: string | null;
  currentCity: City | null;
  favoriteCities: City[];
}

const initialState: State = {
  darkMode: cache.getInitialTheme(),
  tempUnit: cache.getInitialTempUnit(),
  queryResults: [],
  searching: false,
  loading: false,
  error: null,
  currentCity: null,
  favoriteCities: cache.getInitialFavorites(),
};

const rootReducer: Reducer<State, RootAction> = (
  state: State = initialState,
  action: RootAction
): RootState => {
  switch (action.type) {
    case Types.AUTOCOMPLETE_START:
      return { ...state, searching: true };
    case Types.AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        searching: false,
        error: null,
        queryResults: action.payload as AutocompleteDto[],
      };
    case Types.AUTOCOMPLETE_FAILED:
      return { ...state, searching: false, error: action.payload as string };
    case Types.CLEAR_RESULTS:
      return { ...state, queryResults: [] };
    case Types.GEOPOSITION_START:
      return { ...state, loading: true, searching: true };
    case Types.GEOPOSITION_SUCCESS:
      return { ...state, loading: false, searching: false, error: null };
    case Types.GEOPOSITION_FAILED:
      return {
        ...state,
        loading: false,
        searching: false,
        error: action.payload as string,
      };
    case Types.SEARCH_START:
      return { ...state, searching: true };
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        error: null,
        currentCity: action.payload as City,
      };
    case Types.SEARCH_FAILED:
      return { ...state, searching: false, error: action.payload as string };
    case Types.TOGGLE_FAVORITE_SUCCESS:
      return {
        ...state,
        favoriteCities: action.payload as City[],
      };
    case Types.TOGGLE_DARK_MODE_SUCCESS:
      return { ...state, darkMode: action.payload as boolean };
    case Types.TOGGLE_TEMP_UNIT_SUCCESS:
      return { ...state, tempUnit: action.payload as boolean };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
