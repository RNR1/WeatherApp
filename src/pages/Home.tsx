import useSelector from 'store/typedSelector';
import * as Section from 'components/home';
import { Container } from 'components/shared';

const Home = () => {
  const { error } = useSelector(state => state);
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
