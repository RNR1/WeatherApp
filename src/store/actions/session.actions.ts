import City from 'models/City';
import Session from 'store/consts/session.consts';

export const toggleFavorite = () => ({
  type: Session.TOGGLE_FAVORITE,
  payload: null,
});

export const toggleFavoriteFulfilled = (payload: City[]) => ({
  type: Session.TOGGLE_FAVORITE_FULFILLED,
  payload,
});

export const toggleDarkMode = () => ({
  type: Session.TOGGLE_DARK_MODE,
  payload: null,
});

export const toggleDarkModeFulfilled = (payload: boolean) => ({
  type: Session.TOGGLE_DARK_MODE_FULFILLED,
  payload,
});

export const toggleTempUnit = () => ({
  type: Session.TOGGLE_TEMP_UNIT,
  payload: null,
});

export const toggleTempUnitFulfilled = (payload: boolean) => ({
  type: Session.TOGGLE_TEMP_UNIT_FULFILLED,
  payload,
});

type SessionAction = ReturnType<
  | typeof toggleFavorite
  | typeof toggleFavoriteFulfilled
  | typeof toggleDarkMode
  | typeof toggleDarkModeFulfilled
  | typeof toggleTempUnit
  | typeof toggleTempUnitFulfilled
>;

export default SessionAction;
