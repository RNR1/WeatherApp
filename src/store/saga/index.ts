import { takeLatest } from 'redux-saga/effects'
import * as Types from '../actions/types'
import { autoCompleteSaga, searchSaga, geoPositionSaga } from './app'

export default function* rootSaga() {
	yield takeLatest(Types.AUTOCOMPLETE, autoCompleteSaga)
	yield takeLatest(Types.GEOPOSITION, geoPositionSaga)
	yield takeLatest(Types.SEARCH, searchSaga)
}
