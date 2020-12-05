import * as Section from 'components/home';
import { Container } from 'components/shared';
import { useSelector } from 'store/reducer';

const Home = () => {
  const { error } = useSelector(({ search }) => search);
  if (error) return <Section.Error message={error} />;
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
