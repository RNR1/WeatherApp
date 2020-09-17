import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { NavItem, Switch } from '.'
import { RootState } from '../../store/reducer/root'
import { toggleDarkMode, toggleTempUnit } from '../../store/actions/app'

const Navbar: FC<{ close?: () => void }> = ({ close }) => {
	const { darkMode, tempUnit } = useSelector((state: RootState) => state)
	const dispatch = useDispatch()
	return (
		<Nav darkMode={darkMode}>
			<section>
				<List>
					<NavItem>
						<NavLink onClick={close} exact to='/'>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink onClick={close} to='/favorites'>
							Favorites
						</NavLink>
					</NavItem>
				</List>
			</section>
			<section>
				<List>
					<NavItem>
						<Switch
							checked={tempUnit}
							onChange={() => dispatch(toggleTempUnit())}
							icons={['C°', 'F°']}
							aria-label={`Current temperature unit: ${
								tempUnit ? 'fahrenheit' : 'celsius'
							}`}
						/>
					</NavItem>
					<NavItem>
						<Switch
							checked={darkMode}
							onChange={() => dispatch(toggleDarkMode())}
							icons={['☀︎', '☾']}
							aria-label='Dark mode'
						/>
					</NavItem>
				</List>
			</section>
		</Nav>
	)
}

export default Navbar

const Nav = styled.nav<{ darkMode: boolean }>`
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
		display: flex;
		justify-content: space-around;

		& a {
			color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
			height: 100%;
			padding: 1rem 0.8rem;
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

const List = styled.ul`
	font-size: 1.3em;
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-flow: column;
	align-items: center;
	height: 100%;
	width: 100%;

	@media (min-width: 500px) {
		font-size: 1em;
		flex-flow: row;
	}
`
