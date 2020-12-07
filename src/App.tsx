import { useEffect } from 'react';
import Layout from 'components/layout/Layout';
import { useSearch } from 'hooks';
import { DEFAULT_QUERY } from 'config/consts';
import Routes from 'routes/Routes';

function App() {
  const { submit } = useSearch();

  useEffect(() => {
    submit(DEFAULT_QUERY);
  }, [submit]);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
