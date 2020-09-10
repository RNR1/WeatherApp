import React from 'react'
import Lottie from 'react-lottie'
import { Button, Paper } from '@material-ui/core'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import snow from '../animations/snow.json'

const NotFound = () => {
	const history = useHistory()
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: snow,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}
	return (
		<Container elevation={5}>
			<Lottie options={defaultOptions} height={200} width={200} />
			<h1>404</h1>
			<h4>Sorry, the page you visited does not exist.</h4>
			<Button onClick={() => history.replace('/')}>Go Home</Button>
		</Container>
	)
}

export default NotFound

const Container = styled(Paper)`
	padding: 20px;
	margin: 10px;
	text-align: center;
`
