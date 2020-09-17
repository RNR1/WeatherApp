import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as Types from '../actions/types'
import * as Sagas from './root'

export default function* rootSaga() {
	yield takeLatest(Types.AUTOCOMPLETE, Sagas.autoCompleteSaga)
	yield takeLatest(Types.GEOPOSITION, Sagas.geoPositionSaga)
	yield takeLatest(Types.SEARCH, Sagas.searchSaga)
	yield takeEvery(Types.TOGGLE_FAVORITE, Sagas.toggleFavoriteSaga)
	yield takeEvery(Types.TOGGLE_DARK_MODE, Sagas.toggleDarkModeSaga)
}
