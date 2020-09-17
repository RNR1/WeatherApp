import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '../../store/reducer/root'

const Logo: FC<{ onClick?: () => void }> = ({ onClick }) => {
	const { darkMode } = useSelector((state: AppState) => state)
	return (
		<LogoContainer darkMode={darkMode} className='Logo' onClick={onClick}>
			<span role='img' aria-label='Weather Logo'>
				🌤️
			</span>
		</LogoContainer>
	)
}

export default Logo

const LogoContainer = styled.div<{ darkMode: boolean }>`
	background-color: ${({ darkMode }) => (darkMode ? '#52575d' : 'white')};
	padding: 0.5rem;
	font-size: 2.125rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border-radius: 5px;
`
