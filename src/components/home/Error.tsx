import Lottie from 'react-lottie';
import weather from 'animations/weather.json';
import Container from 'components/shared/StyledPaper';

const Error: React.FC<{ message: string }> = ({ message }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: weather,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container elevation={5} square>
      <Lottie options={defaultOptions} height={150} width={150} />
      <h2>Error - {message}</h2>
      <p>Please try again later</p>
    </Container>
  );
};

export default Error;
