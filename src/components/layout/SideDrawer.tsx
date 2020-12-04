import styled from 'styled-components';
import Navbar from 'components/layout/Navbar';
import { Backdrop, Logo } from '.';

interface Props {
  open: boolean;
  close: () => void;
  darkMode: boolean;
}

const SideDrawer: React.FC<Props> = ({ open, close, darkMode }) => {
  return (
    <>
      <Backdrop show={open} onClick={close} />
      <Drawer open={open} darkMode={darkMode}>
        <Logo />
        <Navbar close={close} />
      </Drawer>
    </>
  );
};

export default SideDrawer;

const Drawer = styled.div<{ open: boolean; darkMode: boolean }>`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: ${({ darkMode }) => (darkMode ? '#1a1919' : 'white')};
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: translateX(${({ open }) => (open ? 0 : '-100%')});

  @media (min-width: 500px) {
    display: none;
  }

  & .Logo {
    background: none;
    height: 11%;
    margin-bottom: 32px;
    text-align: center;
  }
`;
