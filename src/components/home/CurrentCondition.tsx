import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

import { RootState } from '../../store/root/reducer'
import { TempIcon, TempUnit } from '../shared'
import FavoriteIcon from './FavoriteIcon'

const CurrentCondition = () => {
	const { currentCity, loading } = useSelector((state: RootState) => state)

	if (loading || !currentCity)
		return (
			<Container>
				<Loader />
			</Container>
		)
	const {
		name,
		currentCondition: { icon, description, celsius, fahrenheit }
	} = currentCity!

	return (
		currentCity && (
			<>
				<Container>
					<div className='information'>
						<TempIcon icon={icon} description={description} />
						<div className='location'>
							<h3>{name}</h3>
							<TempUnit celsius={celsius} fahrenheit={fahrenheit} />
						</div>
					</div>
					<div>
						<FavoriteIcon />
					</div>
				</Container>
				<Description>{description}</Description>
			</>
		)
	)
}

export default CurrentCondition

const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #eee;
	border-radius: 0.5rem;
	padding: 1rem;

	& img {
		vertical-align: start;
	}

	.location > * {
		text-align: start;
		margin: 0;
	}
	& .information {
		display: flex;
		align-items: center;
	}
`

const Description = styled.p`
	font-size: 1.2rem;
	text-align: center;
`
