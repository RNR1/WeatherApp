import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '../../store/root/reducer'

const Logo = () => {
	const { darkMode } = useSelector((state: AppState) => state)
	return (
		<LogoContainer darkMode={darkMode} className='Logo'>
			<span role='img' aria-label='Weather Logo'>
				🌤️
			</span>
		</LogoContainer>
	)
}

export default Logo

const LogoContainer = styled.div<{ darkMode: boolean }>`
	background-color: ${({ darkMode }) => (darkMode ? '#52575d' : 'white')};
	padding: 8px;
	font-size: 34px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border-radius: 5px;
`
