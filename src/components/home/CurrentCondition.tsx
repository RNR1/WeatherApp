import Loader from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { TempIcon, TempUnit } from 'components/shared';
import FavoriteIcon from 'components/home/FavoriteIcon';
import LocationIcon from 'components/home/LocationIcon';
import { useSelector } from 'store/reducer';

const CurrentCondition = () => {
  const { currentCity } = useSelector(({ search }) => search);
  const { loading } = useSelector(({ session }) => session);

  if (loading || !currentCity)
    return (
      <Container>
        <Loader />
      </Container>
    );

  const {
    name,
    currentCondition: { icon, description, celsius, fahrenheit },
  } = currentCity!;

  return (
    currentCity && (
      <>
        <Container>
          <div className="information">
            <TempIcon icon={icon} description={description} />
            <div className="location">
              <h3>{name}</h3>
              <TempUnit celsius={celsius} fahrenheit={fahrenheit} />
            </div>
          </div>
          <span className="actions">
            <LocationIcon />
            <FavoriteIcon />
          </span>
        </Container>
        <Description>{description}</Description>
      </>
    )
  );
};

export default CurrentCondition;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #eee;
  border-radius: 0.5rem;
  padding: 1rem;

  & img {
    vertical-align: start;
  }

  .location > * {
    text-align: start;
    margin: 0;
  }
  & .information {
    display: flex;
    align-items: center;
  }
  .actions > * {
    font-size: 2.6rem;
    padding: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
