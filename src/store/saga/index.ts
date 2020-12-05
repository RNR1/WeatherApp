import { all, fork } from 'redux-saga/effects';
import SearchSaga from './search.saga';
import SessionSaga from './session.saga';

export default function* rootSaga() {
  yield all([fork(SearchSaga)]);
  yield all([fork(SessionSaga)]);
}
