import { lazy } from 'react';
import * as Section from 'components/home';
import Container from 'components/shared/StyledPaper';
import { useSearch } from 'hooks';

const Error = lazy(() => import('components/home/Error'));

const Home = () => {
  const { error } = useSearch();
  if (error) return <Error message={error} />;
  return (
    <>
      <Section.SearchBar />
      <Container elevation={5} square>
        <Section.CurrentCondition />
        <Section.FiveDayForecast />
      </Container>
    </>
  );
};

export default Home;
