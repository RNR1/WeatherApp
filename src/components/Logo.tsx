import React from 'react'
import WeatherLogo from '../assets/Logo.png'
import styled from 'styled-components'

const Logo = () => {
	return (
		<LogoContainer className='Logo'>
			<img src={WeatherLogo} alt='Logo' />
		</LogoContainer>
	)
}

export default Logo

const LogoContainer = styled.div`
	background-color: white;
	padding: 8px;
	height: 100%;
	box-sizing: border-box;
	border-radius: 5px;

	& img {
		height: 100%;
	}
`
