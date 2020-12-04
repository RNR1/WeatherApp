import Loader from '@material-ui/core/CircularProgress';
import useSelector from 'store/typedSelector';
import Day from 'components/home/Day';
import { Title, Cards } from 'components/shared';

const FiveDayForecast = () => {
  const { currentCity, loading } = useSelector(state => state);
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
