import styled from 'styled-components'

const NavItem = styled.li`
	margin: 0.625rem 0;
	padding: 0 0.3125rem;
	box-sizing: border-box;
	display: block;
	width: 100%;
	align-items: center;

	@media (min-width: 500px) {
		margin: 0;
		display: flex;
		height: 100%;
		width: auto;
		align-items: center;

		& div {
			color: #e0ece4;
		}
	}
`

export default NavItem
