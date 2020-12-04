import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Button } from '@material-ui/core';
import { Container } from 'components/shared';
import snow from 'animations/snow.json';

const NotFound = () => {
  const history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: snow,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container elevation={5}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <h1>404</h1>
      <h4>Sorry, the page you visited does not exist.</h4>
      <Button onClick={() => history.replace('/')}>Go Home</Button>
    </Container>
  );
};

export default NotFound;
