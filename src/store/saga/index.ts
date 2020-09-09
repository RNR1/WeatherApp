import { takeLatest } from 'redux-saga/effects'
import * as Types from '../actions/types'
import { autoCompleteSaga } from './app'

export default function* rootSaga() {
	yield takeLatest(Types.AUTOCOMPLETE, autoCompleteSaga)
}
