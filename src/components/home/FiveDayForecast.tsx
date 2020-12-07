import Loader from '@material-ui/core/CircularProgress';
import Day from 'components/home/Day';
import { Title, Cards } from 'components/shared';
import { useSearch, useSession } from 'hooks';

const FiveDayForecast = () => {
  const { currentCity } = useSearch();
  const { loading } = useSession();

  if (loading || !currentCity)
    return (
      <Cards>
        <Loader />
      </Cards>
    );
  const { fiveDayForecast } = currentCity;

  return (
    <>
      <Title>Five-day Forecast</Title>
      <Cards>
        {fiveDayForecast?.map((dayProps, i) => (
          <Day key={i.toString()} {...dayProps} />
        ))}
      </Cards>
    </>
  );
};

export default FiveDayForecast;
