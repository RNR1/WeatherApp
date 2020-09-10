import React from 'react'
import WeatherLogo from '../assets/Logo.png'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppState } from '../store/root/reducer'

const Logo = () => {
	const { darkMode } = useSelector((state: AppState) => state)
	return (
		<LogoContainer darkMode={darkMode} className='Logo'>
			<img src={WeatherLogo} alt='Logo' />
		</LogoContainer>
	)
}

export default Logo

const LogoContainer = styled.div<{ darkMode: boolean }>`
	background-color: ${({ darkMode }) => (darkMode ? '#52575d' : 'white')};
	padding: 8px;
	height: 100%;
	box-sizing: border-box;
	border-radius: 5px;

	& img {
		height: 100%;
	}
`
