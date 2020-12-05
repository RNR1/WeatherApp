import Temperature from 'models/Temperature';
import { useSelector } from 'store/reducer';

const TempUnit: React.FC<Partial<Temperature>> = ({ celsius, fahrenheit }) => {
  const { tempUnit } = useSelector(({ session }) => session);

  return (
    <p>
      {tempUnit ? `${fahrenheit?.toFixed(1)}° F` : `${celsius?.toFixed(1)}° C`}
    </p>
  );
};

export default TempUnit;
