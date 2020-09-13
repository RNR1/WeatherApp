import React, { FC, PropsWithChildren, useState } from 'react'
import { useSelector } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import styled from 'styled-components'

import { Navbar, Logo, SideDrawer, DrawerToggle } from '.'
import { RootState } from '../../store/reducer/app'
import { useHistory } from 'react-router-dom'

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [open, setOpen] = useState(false)
	const { darkMode } = useSelector((state: RootState) => state)
	const history = useHistory()

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
			<SideDrawer
				darkMode={darkMode}
				open={open}
				close={() => setOpen(false)}
			/>
			<Header darkMode={darkMode}>
				<DrawerToggle
					darkMode={darkMode}
					onClick={() => setOpen((prev) => !prev)}
				/>
				<Logo onClick={() => history.push('/')} />
				<Navbar />
			</Header>
			<Main>{children}</Main>
		</ThemeProvider>
	)
}

export default Layout

const Main = styled.main`
	margin: 3.75rem auto;
	max-width: 960px;
`

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
`
