import React, { FC, PropsWithChildren, useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import styled from 'styled-components'

import Navbar from './Navbar'
import Logo from './Logo'
import SideDrawer from './SideDrawer'
import DrawerToggle from './DrawerToggle'
import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [open, setOpen] = useState(false)
	const { darkMode } = useSelector((state: RootState) => state)

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: darkMode ? 'dark' : 'light'
				}
			}),
		[darkMode]
	)
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SideDrawer open={open} close={() => setOpen(false)} />
			<Header darkMode={darkMode}>
				<DrawerToggle
					darkMode={darkMode}
					onClick={() => setOpen((prev) => !prev)}
				/>
				<Logo />
				<Navbar />
			</Header>
			<Main>{children}</Main>
		</ThemeProvider>
	)
}

export default Layout

const Main = styled.main`
	margin: 60px auto;
	max-width: 960px;
`

const Header = styled.header<{ darkMode: boolean }>`
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ darkMode }) => (darkMode ? '#1a1919' : '#5398be')};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;

	& nav {
		height: 100%;
		width: 100%;
	}

	& .Logo {
		height: 80%;
	}

	@media (max-width: 499px) {
		justify-content: space-between;

		& nav {
			display: none;
		}
	}
`
