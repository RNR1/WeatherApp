import React from 'react'
import styled from 'styled-components'

import Switch from './Switch'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import { toggleDarkMode, toggleTempUnit } from '../store/actions/app'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar = () => {
	const { darkMode, tempUnit } = useSelector((state: RootState) => state)
	const dispatch = useDispatch()
	return (
		<nav>
			<List>
				<NavItem>
					<NavLink exact to='/'>
						Home
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='/favorites'>Favorites</NavLink>
				</NavItem>
				<NavItem>
					<Switch
						checked={tempUnit}
						onChange={() => dispatch(toggleTempUnit())}
						icons={['C', 'F']}
					/>
				</NavItem>
				<NavItem>
					<Switch
						checked={darkMode}
						onChange={() => dispatch(toggleDarkMode())}
						icons={['☀︎', '☾']}
					/>
				</NavItem>
			</List>
		</nav>
	)
}

export default Navbar

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-flow: column;
	align-items: center;
	height: 100%;

	@media (min-width: 500px) {
		flex-flow: row;
	}
`
