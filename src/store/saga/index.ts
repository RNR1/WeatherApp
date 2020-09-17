import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as Types from '../actions/types'
import {
	autoCompleteSaga,
	searchSaga,
	geoPositionSaga,
	toggleFavoriteSaga
} from './root'

export default function* rootSaga() {
	yield takeLatest(Types.AUTOCOMPLETE, autoCompleteSaga)
	yield takeLatest(Types.GEOPOSITION, geoPositionSaga)
	yield takeLatest(Types.SEARCH, searchSaga)
	yield takeEvery(Types.TOGGLE_FAVORITE, toggleFavoriteSaga)
}
