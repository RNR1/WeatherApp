import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Logo from './Logo'

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<div>
			<Header>
				<Logo />
				<Navbar />
			</Header>
			<main>{children}</main>
		</div>
	)
}

export default Layout

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

	& .Toolbar nav {
		height: 100%;
	}

	& .Logo {
		height: 80%;
	}
`
