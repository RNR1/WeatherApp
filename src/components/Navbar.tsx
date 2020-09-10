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
			<List darkMode={darkMode}>
				<section>
					<NavItem>
						<NavLink exact to='/'>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/favorites'>Favorites</NavLink>
					</NavItem>
				</section>
				<section>
					<NavItem>
						<Switch
							checked={tempUnit}
							onChange={() => dispatch(toggleTempUnit())}
							icons={['C°', 'F°']}
						/>
					</NavItem>
					<NavItem>
						<Switch
							checked={darkMode}
							onChange={() => dispatch(toggleDarkMode())}
							icons={['☀︎', '☾']}
						/>
					</NavItem>
				</section>
			</List>
		</nav>
	)
}

export default Navbar

const List = styled.ul<{ darkMode: boolean }>`
	font-size: 1.3em;
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 100%;

	& section {
		width: 100%;
	}

	& a {
		color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
		text-decoration: none;
		width: 100%;
		box-sizing: border-box;
		display: block;
		transition: border-bottom 0.3s;
	}

	& a:hover,
	& a:active,
	& a.active {
		color: ${({ darkMode }) => (darkMode ? '#f7d1ba' : '#145374')};
	}

	@media (min-width: 500px) {
		font-size: 1em;
		flex-flow: row;

		& section {
			display: flex;
			width: auto;
		}

		& a {
			color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
			height: 100%;
			padding: 16px 10px;
			border-bottom: 4px solid transparent;
		}

		& a:hover,
		& a:active,
		& a.active {
			border-bottom: 4px solid #e0ece4;
			color: #e0ece4;
		}
	}
`
