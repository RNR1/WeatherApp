import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const Navbar = () => {
	return (
		<nav>
			<List>
				<NavItem to='/'>Home</NavItem>
				<NavItem to='/favorites'>Favorites</NavItem>
			</List>
		</nav>
	)
}

export default Navbar

const List = styled.ul`
	 {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-flow: column;
		align-items: center;
		height: 100%;
	}

	@media (max-width: 499px) {
		display: none;
	}

	@media (min-width: 500px) {
		 {
			flex-flow: row;
		}
	}
`
