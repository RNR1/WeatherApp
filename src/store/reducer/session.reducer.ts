import City from 'models/City';
import SessionAction from 'store/actions/session.actions';
import Session from 'store/consts/session.consts';
import * as cache from 'utils/cache';

export interface SessionState {
  darkMode: boolean;
  tempUnit: boolean;
  loading: boolean;
  favoriteCities: City[];
}

const initialState: SessionState = {
  darkMode: cache.getInitialTheme(),
  tempUnit: cache.getInitialTempUnit(),
  loading: false,
  favoriteCities: cache.getInitialFavorites(),
};

const sessionReducer = (
  state: SessionState = initialState,
  action: SessionAction
): SessionState => {
  switch (action.type) {
    case Session.TOGGLE_FAVORITE_FULFILLED:
      return {
        ...state,
        favoriteCities: action.payload as City[],
      };
    case Session.TOGGLE_DARK_MODE_FULFILLED:
      return { ...state, darkMode: action.payload as boolean };
    case Session.TOGGLE_TEMP_UNIT_FULFILLED:
      return { ...state, tempUnit: action.payload as boolean };
    default:
      return state;
  }
};

export default sessionReducer;
