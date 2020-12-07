import { useDispatch } from 'react-redux';
import { useSelector } from 'store/reducer';
import * as Action from 'store/actions/search.actions';
import { SearchQueryDto } from 'api/transform';
import {
  AutoCompletePayload,
  GeoPositionPayload,
} from 'store/consts/search.consts';
import { useCallback, useMemo } from 'react';

const useSearch = () => {
  const dispatch = useDispatch();
  const { queryResults, searching, error, currentCity } = useSelector(
    ({ search }) => search
  );

  const autoComplete = useCallback(
    (payload: AutoCompletePayload) => dispatch(Action.autoComplete(payload)),
    [dispatch]
  );

  const clearResults = useCallback(() => dispatch(Action.clearResults()), [
    dispatch,
  ]);

  const geoPosition = useCallback(
    (payload: GeoPositionPayload) => dispatch(Action.geoPosition(payload)),
    [dispatch]
  );

  const submit = useCallback(
    (payload: SearchQueryDto) => dispatch(Action.searchSubmit(payload)),
    [dispatch]
  );

  const resultsAvailable = useMemo(() => queryResults?.length > 0, [
    queryResults,
  ]);

  return {
    queryResults,
    searching,
    error,
    currentCity,
    autoComplete,
    clearResults,
    geoPosition,
    submit,
    resultsAvailable,
  };
};

export default useSearch;
