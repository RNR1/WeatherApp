import useSelector from 'store/typedSelector';
import Temperature from 'models/Temperature';

const TempUnit: React.FC<Partial<Temperature>> = ({ celsius, fahrenheit }) => {
  const { tempUnit } = useSelector(state => state);

  return (
    <p>
      {tempUnit ? `${fahrenheit?.toFixed(1)}° F` : `${celsius?.toFixed(1)}° C`}
    </p>
  );
};

export default TempUnit;
