import React from 'react'
import weather from '../animations/weather.json'
import Lottie from 'react-lottie'

import { useSelector } from 'react-redux'
import { RootState } from '../store/root/reducer'
import styled from 'styled-components'

const Error = () => {
	const { error } = useSelector((state: RootState) => state)
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: weather,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<Container>
			<Lottie options={defaultOptions} height={150} width={150} />
			<h2>{error}</h2>
			<h5>Please try again later</h5>
		</Container>
	)
}

export default Error

const Container = styled.div`
	text-align: center;
`
