import { all, put, takeLatest } from 'redux-saga/effects';
import API from 'api/client';
import { AutocompleteDto, SearchQueryDto } from 'api/transform';
import { autocomplete } from 'api/utils';
import City from 'models/City';
import Temperature from 'models/Temperature';
import SearchAction, * as Actions from 'store/actions/search.actions';
import Search, * as Const from 'store/consts/search.consts';

function* autoCompleteSaga({ payload }: SearchAction) {
  const { q, value } = payload as Const.AutoCompletePayload;
  try {
    yield put(Actions.autoCompletePending());
    const results: AutocompleteDto[] = yield autocomplete(q);
    yield put(
      Actions.autoCompleteFulfilled(value ? [value, ...results] : results)
    );
  } catch (error) {
    yield put(Actions.autoCompleteRejected(error));
  }
}

function* geoPositionSaga({ payload }: SearchAction) {
  try {
    yield put(Actions.geoPositionPending());
    const results = yield API.geoPosition(payload as Const.GeoPositionPayload);
    yield put(Actions.geoPositionFulfilled());
    yield put(Actions.searchSubmit(results as SearchQueryDto));
  } catch (error) {
    yield put(Actions.geoPositionRejected(error));
  }
}

function* searchSaga({ payload }: SearchAction) {
  const { name, locationKey } = payload as SearchQueryDto;
  try {
    yield put(Actions.searchPending());
    const [currentCondition, fiveDayForecast]: [
      Temperature,
      Temperature[]
    ] = yield all([
      API.currentCondition(locationKey),
      API.fiveDayForecast(locationKey),
    ]);

    const currentCity = new City(
      name,
      locationKey,
      currentCondition,
      fiveDayForecast
    );
    yield put(Actions.searchFulfilled(currentCity));
  } catch (error) {
    yield put(Actions.searchRejected(error));
  }
}

export default function* SearchSaga() {
  yield takeLatest(Search.AUTOCOMPLETE, autoCompleteSaga);
  yield takeLatest(Search.GEOPOSITION, geoPositionSaga);
  yield takeLatest(Search.SEARCH_SUBMIT, searchSaga);
}
