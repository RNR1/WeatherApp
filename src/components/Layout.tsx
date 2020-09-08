import React, { FC, PropsWithChildren, useState } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Logo from './Logo'
import SideDrawer from './SideDrawer'
import DrawerToggle from './DrawerToggle'

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<SideDrawer open={open} close={() => setOpen(false)} />
			<Header>
				<DrawerToggle onClick={() => setOpen((prev) => !prev)} />
				<Logo />
				<Navbar />
			</Header>
			<Main>{children}</Main>
		</>
	)
}

export default Layout

const Main = styled.main`
	margin: 60px auto;
`

const Header = styled.header`
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #5398be;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;

	& nav {
		height: 100%;
	}

	& .Logo {
		height: 80%;
	}

	@media (max-width: 499px) {
		& nav {
			display: none;
		}
	}
`
