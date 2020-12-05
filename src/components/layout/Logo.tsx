import styled from 'styled-components';
import { useSelector } from 'store/reducer';

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { darkMode } = useSelector(({ session }) => session);
  return (
    <LogoContainer darkMode={darkMode} className="Logo" onClick={onClick}>
      <span role="img" aria-label="Weather Logo">
        🌤️
      </span>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div<{ darkMode: boolean }>`
  background-color: ${({ darkMode }) => (darkMode ? '#52575d' : 'white')};
  padding: 0.5rem;
  font-size: 2.125rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
`;
