import { useDispatch } from 'react-redux';
import { useSelector } from 'store/reducer';
import * as Action from 'store/actions/session.actions';
import { useCallback } from 'react';

const useSession = () => {
  const dispatch = useDispatch();
  const { darkMode, tempUnit, loading, favoriteCities } = useSelector(
    ({ session }) => session
  );

  const toggleFavorite = useCallback(() => dispatch(Action.toggleFavorite()), [
    dispatch,
  ]);
  const toggleTempUnit = useCallback(() => dispatch(Action.toggleTempUnit()), [
    dispatch,
  ]);
  const toggleDarkMode = useCallback(() => dispatch(Action.toggleDarkMode()), [
    dispatch,
  ]);

  return {
    darkMode,
    tempUnit,
    loading,
    favoriteCities,
    toggleFavorite,
    toggleTempUnit,
    toggleDarkMode,
  };
};

export default useSession;
