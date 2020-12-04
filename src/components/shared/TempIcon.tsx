import styled from 'styled-components';

import Temperature from 'models/Temperature';

const TempIcon: React.FC<Partial<Temperature>> = ({ icon, description }) => (
  <Container>
    <img
      src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
      alt={description}
    />
  </Container>
);

export default TempIcon;

const Container = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;

  & img {
    padding-top: 5px;
    width: 100%;
  }
`;
