import { useSession } from 'hooks';
import Temperature from 'models/Temperature';

const TempUnit: React.FC<Partial<Temperature>> = ({ celsius, fahrenheit }) => {
  const { tempUnit } = useSession();

  return (
    <p>
      {tempUnit ? `${fahrenheit?.toFixed(1)}° F` : `${celsius?.toFixed(1)}° C`}
    </p>
  );
};

export default TempUnit;
