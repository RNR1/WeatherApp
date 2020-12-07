import { put, select, takeEvery } from 'redux-saga/effects';
import { RootState } from 'store/reducer';
import * as Actions from 'store/actions/session.actions';
import * as Favorites from 'utils/favorites';
import * as cache from 'utils/cache';
import Session from 'store/consts/session.consts';

function* toggleFavoriteSaga() {
  const { search, session }: RootState = yield select();
  const { currentCity } = search;
  const { favoriteCities: favorites } = session;
  const updatedFavorites = yield Favorites.isFavorite(favorites, currentCity!)
    ? Favorites.remove(favorites, currentCity!)
    : Favorites.add(favorites, currentCity!);
  cache.set('favorites', updatedFavorites);
  yield put(Actions.toggleFavoriteFulfilled(updatedFavorites));
}

function* toggleDarkModeSaga() {
  const { session }: RootState = yield select();
  cache.set('dark', !session.darkMode);
  yield put(Actions.toggleDarkModeFulfilled(!session.darkMode));
}

function* toggleTempUnitSaga() {
  const { session }: RootState = yield select();
  cache.set('tempUnit', !session.tempUnit);
  yield put(Actions.toggleTempUnitFulfilled(!session.tempUnit));
}

export default function* SessionSaga() {
  yield takeEvery(Session.TOGGLE_FAVORITE, toggleFavoriteSaga);
  yield takeEvery(Session.TOGGLE_DARK_MODE, toggleDarkModeSaga);
  yield takeEvery(Session.TOGGLE_TEMP_UNIT, toggleTempUnitSaga);
}
