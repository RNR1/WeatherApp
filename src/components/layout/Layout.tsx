import { FC, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useSelector from 'store/typedSelector';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';
import Navbar from 'components/layout/Navbar';
import SideDrawer from 'components/layout/SideDrawer';
import { Logo, DrawerToggle } from '.';

const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useSelector(state => state);
  const history = useHistory();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideDrawer
        darkMode={darkMode}
        open={open}
        close={() => setOpen(false)}
      />
      <Header darkMode={darkMode}>
        <DrawerToggle
          darkMode={darkMode}
          onClick={() => setOpen(prev => !prev)}
        />
        <Logo onClick={() => history.push('/')} />
        <Navbar />
      </Header>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;

const Main = styled.main`
  margin: 3.75rem auto;
  max-width: 960px;
`;

const Header = styled.header<{ darkMode: boolean }>`
  height: 3.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ darkMode }) => (darkMode ? '#1a1919' : '#5398be')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.25rem;
  box-sizing: border-box;
  z-index: 90;

  & nav {
    height: 100%;
    width: 100%;
  }

  & .Logo {
    height: 80%;
    cursor: pointer;
  }

  @media (max-width: 499px) {
    justify-content: space-between;

    & nav {
      display: none;
    }
  }
`;
