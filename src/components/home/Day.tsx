import dayjs from 'dayjs';
import Temperature from 'models/Temperature';
import { TempIcon, TempUnit, Card } from 'components/shared';

const Day: React.FC<Temperature> = ({
  date,
  icon,
  description,
  celsius,
  fahrenheit,
}) => (
  <Card>
    <h3>{dayjs(date).format('ddd')}</h3>
    <TempIcon icon={icon} description={description} />
    <TempUnit celsius={celsius} fahrenheit={fahrenheit} />
    <p>{description}</p>
  </Card>
);

export default Day;
