import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	darkMode?: boolean
	onClick: () => void
}

const DrawerToggle: FC<Props> = ({ ...props }) => {
	return (
		<Container {...props}>
			<div />
			<div />
			<div />
		</Container>
	)
}

export default DrawerToggle

const Container = styled.div<Props>`
	width: 40px;
	height: 100%;
	display: flex;
	flex-flow: column;
	justify-content: space-around;
	align-items: center;
	padding: 10px 0;
	box-sizing: border-box;
	cursor: pointer;

	& div {
		width: 90%;
		height: 3px;
		background-color: ${({ darkMode }) => (darkMode ? '#f1f3de' : 'white')};
	}

	@media (min-width: 500px) {
		display: none;
	}
`
