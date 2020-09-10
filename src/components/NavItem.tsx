import styled from 'styled-components'

const NavItem = styled.li`
	margin: 10px 0;
	padding: 0 5px;
	box-sizing: border-box;
	display: block;
	width: 100%;
	align-items: center;

	& div {
		color: black;
	}

	& a {
		color: black;
		text-decoration: none;
		width: 100%;
		box-sizing: border-box;
		display: block;
		transition: border-bottom 0.3s;
	}

	& a:hover,
	& a:active,
	& a.active {
		color: #056674;
	}

	@media (min-width: 500px) {
		margin: 0;
		display: flex;
		height: 100%;
		width: auto;
		align-items: center;

		& div {
			color: #e0ece4;
		}

		& a {
			color: white;
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

export default NavItem
