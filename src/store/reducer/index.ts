import { combineReducers } from 'redux';
import { createSelectorHook } from 'react-redux';

import session from './session.reducer';
import search from './search.reducer';

const rootReducer = combineReducers({ search, session });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector = createSelectorHook<RootState>();
