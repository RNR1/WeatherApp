import React, { FC } from 'react'
import styled from 'styled-components'
import Backdrop from './Backdrop'
import Logo from './Logo'
import Navbar from './Navbar'

interface Props {
	open: boolean
	close: () => void
}

const SideDrawer: FC<Props> = ({ open, close }) => {
	return (
		<>
			<Backdrop show={open} onClick={close} />
			<Drawer className={open ? 'Open' : 'Close'}>
				<Logo />
				<Navbar />
			</Drawer>
		</>
	)
}

export default SideDrawer

const Drawer = styled.div`
	position: fixed;
	width: 280px;
	max-width: 70%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 200;
	background-color: white;
	padding: 32px 16px;
	box-sizing: border-box;
	transition: transform 0.3s ease-out;

	@media (min-width: 500px) {
		display: none;
	}

	&.Open {
		transform: translateX(0);
	}

	&.Close {
		transform: translateX(-100%);
	}

	& .Logo {
		height: 11%;
		margin-bottom: 32px;
	}
`
