import Loader from '@material-ui/core/CircularProgress';
import Day from 'components/home/Day';
import { Title, Cards } from 'components/shared';
import { useSelector } from 'store/reducer';

const FiveDayForecast = () => {
  const { currentCity } = useSelector(({ search }) => search);
  const { loading } = useSelector(({ session }) => session);

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
