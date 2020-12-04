import Lottie from 'react-lottie';
import sun from 'animations/sun.json';

const NoFavorites = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sun,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={150} width={150} />
      <p>You have no favorites yet</p>
    </>
  );
};

export default NoFavorites;
