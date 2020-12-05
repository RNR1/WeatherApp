import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from 'routes/Routes';
import Layout from 'components/layout/Layout';
import { searchSubmit } from 'store/actions/search.actions';
import { DEFAULT_QUERY } from 'config/consts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSubmit(DEFAULT_QUERY));
  }, [dispatch]);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
