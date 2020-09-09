import { takeLatest } from 'redux-saga/effects'
import * as Types from '../actions/types'
import { autoCompleteSaga, searchSaga } from './app'

export default function* rootSaga() {
	yield takeLatest(Types.AUTOCOMPLETE, autoCompleteSaga)
	yield takeLatest(Types.SEARCH, searchSaga)
}
