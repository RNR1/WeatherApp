import { createSelectorHook } from 'react-redux';
import { RootState } from 'store/reducer/root';

const useSelector = createSelectorHook<RootState>();
export default useSelector;
